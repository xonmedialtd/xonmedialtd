const GTM_ID = "GTM-WFPV5522";

const ZARAZ_SNIPPET = `<script src="/cdn-cgi/zaraz/i.js" referrerpolicy="origin"></script>`;

const HEAD_SNIPPET = `<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  wait_for_update:500
});
document.addEventListener('zarazConsentChoicesUpdated',function(){
  var choices=(window.zaraz&&zaraz.consent&&zaraz.consent.getAll&&zaraz.consent.getAll())||{};
  var granted=Object.keys(choices).some(function(key){return choices[key]===true;});
  gtag('consent','update',{
    analytics_storage:granted?'granted':'denied',
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied'
  });
});
</script>
${ZARAZ_SNIPPET}
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.xonmedia.ltd/metrics/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');</script>
<!-- End Google Tag Manager -->`;

const BODY_SNIPPET = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.xonmedia.ltd/metrics/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

export async function onRequest(context) {
	const response = await context.next();
	const contentType = response.headers.get("content-type") || "";
	if (!contentType.includes("text/html")) return response;

	const state = { sawHead: false, sawScript: false, sawZaraz: false, needsBody: false };

	return new HTMLRewriter()
		.on("script", {
			element(element) {
				const src = element.getAttribute("src") || "";
				if (src.includes("/cdn-cgi/zaraz/i.js")) state.sawZaraz = true;
			},
			text(text) {
				if (text.text.includes(GTM_ID)) state.sawScript = true;
			},
		})
		.on("head", {
			element(element) {
				state.sawHead = true;
				element.onEndTag((end) => {
					if (!state.sawScript) {
						state.needsBody = true;
						end.before(HEAD_SNIPPET, { html: true });
					} else if (!state.sawZaraz) {
						end.before(ZARAZ_SNIPPET, { html: true });
					}
				});
			},
		})
		.on("body", {
			element(element) {
				if (!state.sawHead) {
					element.prepend(`${HEAD_SNIPPET}\n${BODY_SNIPPET}`, { html: true });
					return;
				}
				if (state.needsBody) element.prepend(BODY_SNIPPET, { html: true });
			},
		})
		.transform(response);
}
