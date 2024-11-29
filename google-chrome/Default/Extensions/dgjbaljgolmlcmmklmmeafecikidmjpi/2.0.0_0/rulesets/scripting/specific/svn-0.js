"use strict";

!function() {
    const n = new Map([ [ "24ur.com", [ 0, 1, 2 ] ], [ "vreme.24ur.com", 0 ], [ "moskisvet.com", [ 0, 1, 19, 20, 21, 22, 23 ] ], [ "napovednik.com", 0 ], [ "strojnistvo.com", 0 ], [ "studentarija.net", [ 0, 57 ] ], [ "cekin.si", [ 0, 19, 21, 22, 67 ] ], [ "mojaleta.si", [ 0, 101 ] ], [ "sta.si", 0 ], [ "svet24.si", [ 0, 34, 126 ] ], [ "tehnik.telekom.si", 0 ], [ "zadovoljna.si", [ 0, 1, 19, 20, 21 ] ], [ "avtomanija.com", 3 ], [ "avtomanija.si", 3 ], [ "avtomobilizem.com", 4 ], [ "avtonasveti.com", 5 ], [ "mojprihranek.si", [ 5, 104 ] ], [ "bicikel.com", 6 ], [ "naprostem.si", 6 ], [ "tekac.si", 6 ], [ "bolha.com", 7 ], [ "bringler.com", 8 ], [ "dnevne-novice.com", 9 ], [ "drazbe123.com", 10 ], [ "dne.enaa.com", 11 ], [ "lifestyle.enaa.com", 12 ], [ "hudo.com", [ 13, 14 ] ], [ "mladina.si", [ 14, 98 ] ], [ "vreme.zurnal24.si", 14 ], [ "igrice.hudo.com", 15 ], [ "mojepotovanje.hudo.com", [ 16, 17 ] ], [ "moski.hudo.com", [ 17, 18 ] ], [ "zenska.hudo.com", 18 ], [ "okusno.je", [ 19, 20 ] ], [ "bibaleze.si", [ 19, 20, 63 ] ], [ "dominvrt.si", [ 19, 63, 77 ] ], [ "vizita.si", [ 19, 20, 137 ] ], [ "nogomania.com", 24 ], [ "planet-lepote.com", [ 25, 26 ] ], [ "pravljicna.si", 25 ], [ "utrinek.si", 25 ], [ "zdravje.si", 25 ], [ "tocnoto.si", [ 26, 49, 132 ] ], [ "pomurec.com", 27 ], [ "pons.com", 28 ], [ "poraba.com", 29 ], [ "slo-tech.com", [ 29, 33 ] ], [ "racunalniske-novice.com", 30 ], [ "racunovodja.com", 31 ], [ "nepremicnine.si21.com", 32 ], [ "sobotainfo.com", [ 34, 35 ] ], [ "med.over.net", [ 34, 48, 49 ] ], [ "maribor24.si", 34 ], [ "metropolitan.si", [ 34, 96 ] ], [ "n1info.si", [ 34, 106 ] ], [ "t3tech.si", 34 ], [ "zurnal24.si", [ 34, 141 ] ], [ "studentski-servis.com", 36 ], [ "vecer.com", 37 ], [ "slovnica.slovenscina.eu", 38 ], [ "avto.info", 39 ], [ "celje.info", 40 ], [ "kozjansko.info", 41 ], [ "adomnia.net", 42 ], [ "avto.net", 43 ], [ "hribi.net", 44 ], [ "mediaspeed.net", 45 ], [ "nepremicnine.net", 46 ], [ "obala.net", 47 ], [ "porscheinterauto.net", 50 ], [ "ringaraja.net", 51 ], [ "sentjur.net", 52 ], [ "siol.net", 53 ], [ "tv-spored.siol.net", [ 54, 55 ] ], [ "lepdan.si", 54 ], [ "vsikuponi.si", [ 54, 139 ] ], [ "vreme.siol.net", 55 ], [ "slonep.net", 56 ], [ "tekaskiforum.net", 58 ], [ "instore.rs", 59 ], [ "instore.si", 59 ], [ "1nadan.si", 60 ], [ "aktivni.si", 61 ], [ "avto-fokus.si", 62 ], [ "bizi.si", 64 ], [ "bodieko.si", 65 ], [ "caszazemljo.si", 66 ], [ "ceneje.si", 68 ], [ "ciklon.si", 69 ], [ "citymagazine.si", 70 ], [ "data.si", 71 ], [ "delo.si", 72 ], [ "demokracija.si", 73 ], [ "dnevnik.si", 74 ], [ "dobrakarma.si", [ 75, 76 ] ], [ "podarimo.si", [ 76, 110 ] ], [ "druzina.si", 78 ], [ "e-mesto.si", 79 ], [ "enajdi.si", 80 ], [ "explicit.si", 81 ], [ "finance.si", 82 ], [ "izvozniki.finance.si", 83 ], [ "gohome.si", 84 ], [ "golfportal.si", 85 ], [ "regionalobala.si", [ 85, 117 ] ], [ "informiran.si", 86 ], [ "kajkupiti.si", 87 ], [ "kolosej.si", 88 ], [ "kosmika.si", 89 ], [ "letakonosa.si", 90 ], [ "lokalec.si", 91 ], [ "lokalno.si", 92 ], [ "lupa-portal.si", 93 ], [ "marketingmagazin.si", 94 ], [ "megasvet.si", 95 ], [ "mlacom.si", 97 ], [ "mladipodjetnik.si", 99 ], [ "mobile.si", 100 ], [ "mojaobcina.si", 102 ], [ "mojblink.si", 103 ], [ "motiviran.si", 105 ], [ "najdi.si", 107 ], [ "namen.si", 108 ], [ "novice.si", 109 ], [ "podjetnik.si", 111 ], [ "pokukaj.si", 112 ], [ "preberi.si", 113 ], [ "publishwall.si", 114 ], [ "radio1.si", 115 ], [ "radiokrka.si", 116 ], [ "rfantasy.si", 118 ], [ "rtvslo.si", 119 ], [ "skandal24.si", 120 ], [ "slo-android.si", 121 ], [ "slovenskenovice.si", 122 ], [ "stajerskival.si", 123 ], [ "stop-neplacniki.si", 124 ], [ "stud-serv-mb.si", 125 ], [ "dolenjskilist.svet24.si", 127 ], [ "ekipa.svet24.si", 128 ], [ "kmetija.svet24.si", 129 ], [ "kum.svet24.si", 130 ], [ "tehnozvezdje.si", 131 ], [ "tvambienti.si", 133 ], [ "vandraj.si", 134 ], [ "varcevanje-energije.si", 135 ], [ "vemkajjem.si", 136 ], [ "volan.si", 138 ], [ "zastarse.si", 140 ], [ "spored.tv", 142 ] ]), e = new Map(void 0), a = new Map(void 0);
    self.specificImports = self.specificImports || [], self.specificImports.push({
        argsList: [ ".banner", "#proad", ".article__body > div > a,\n.banner__below,\n.banner__billboard,\n.border-black\\/08.border-b.lg\\:p-16,\n.border-black\\/08.border-l,\n.justify-center.sidebar__box,\n.proad,\n.shop-image,\n.sidebar__banner:has(.ads-player),\n.sidebar__box:has(.bg-brand-caszazemljo, .eurojackpot, .pr, .voyobox)", "#Banner300R", ".widget-ad-bottom-banner", ".td-a-rec", ".shop__card.noPaddingAlways.col-md-12,\n.topBanner,\n.topBannerLanding", '#coloumnAd,\n#newsOfTheDay,\n#servicesToItems,\n.Banner--adsenseForSearch,\n.BannerAlignment,\n.BannerBillboard,\n.EntityList--ListItemFeaturedStore,\n.EntityList--ListItemVauVauAd,\n.HeaderSpotlight.Attention,\n.HeaderSpotlight:has(a[href^="https://bit.ly"]),\n.Offerista,\n.TitlePage-bannerWrapper,\n.TitlePage-block.Headline,\n.mj-pf-widget-iframe,\n.sectionBlock.Headline,\n.trakica_container,\n[id^="midasWidget"]', "#block-block-35,\n#left_click_div,\n#right_click_div,\n.featurebar_right,\n.front_topgames_footer", "#sp-pasice,\n#sp-pasice3,\n#sp-user2,\n.bannergroup,\n.editoriali,\n.matej-carousell-left,\n.matej-carousell-right", ".single_add", "#html_javascript_adder-2", ".addthis_toolbox,\n.widget_subscribe_widget", "aside.ad", ".ad", "#contentLeft,\n#contentRight > .leaderboard,\n#playzone > .leaderboard,\n#userGenGames", ".banner-inner", ".grid1.rectangle", ".desktopAd", ".microsite-article,\nonl-article-connected,\nonl-banner", ".microsite-section", "onl-magick-box", ".outbrain", '.card-overlay[target="_blank"],\n.dark\\:bg-white\\/5,\n.embed_mailing,\n.mx-8.flex-wrap,\n.relatove,\n.sidebar__box > [target="_blank"]', ".sideBoxBanner", ".td-post-sharing-top", ".td-header-rec-wrap", "#nestandard-holder,\n.ban_item,\n.do-space,\n.header-blocks-aspace", '[id^="pons-ad"]', "#banner", "#single_post > .banner,\n.content > .banner,\n.img-ad,\n.partners", ".osrednji_del > .poravnajgor:nth-of-type(1),\ntd > table > tbody > tr > td > .poravnajgor > tbody > tr:nth-of-type(1)", ".re-cta-advertisement", "#panels > aside > div:nth-of-type(3),\n#panels > aside > div:nth-of-type(4)", ".lwdgt", ".after-nav-ads", "div.job-item.ad-wrapper", "#billboard1,\n#gBig,\n#gSmall,\n#sidebar1,\n#sidebar2,\n#sidebar3,\n#sidebar4,\n.billboard-wrapper,\n.glide__slide,\n.infeed-wrapper,\n.mb-7.pb-7,\n.mt-5.space-x-8,\n.mx-auto.px-4", "#biscuitFormDiv", "#bannerC1_728,\n#bannerC2,\n.bannerR2", "#header-right-section,\n#heateor_ss_browser_popup_bg", ".custom-html-widget,\n.g-single,\n.widget-10.widget-last.widget-even", ".banners-box", ".BannerBox972,\n.GO-banner-Billboard,\n.Oblika3Container", "#desnistolpec,\n#oglas", ".banner2,\n.banner_cont", "#ad-detail,\n#ad-ribbon,\n#top_wrap,\n.ad-container", ".category > .col-md-3", "#lnl-footer,\n.category-banner-desktop,\n.feedo,\n.widget_oglas_widget,\nblockquote", ".livenetlife_links", ".roglas_lista:nth-of-type(2),\n.roglas_listaBanner", "#newsletterFrame,\n.bannerInText,\n.h-banner", ".bsaProItems", "#itisAdPromo,\n.card--ts_storitva,\n.fold_pr,\n.fold_telekom_footer,\n.storitve_widget,\n.telekom_menu_desktop__card_wrap,\n.widgetWrap", ".ads", ".widget-footer", '.sponzorirani,\n[id^="ad"]', "#banner_side_layer,\n.banner_footer", ".mosaicflow__column:nth-of-type(4)", ".img-responsive,\n.oglas2,\n.oglasi", ".background_link", ".banner-app-article,\n.livenetlife_linkswidget_logo", "#baner,\n#banners,\n.uvodna_bottomBaners", ".xl\\:h-250.h-470", ".banner-970,\n.td-zsd", ".td-is-sticky.tdc-column", ".ng-star-inserted.banner,\n.thumb-list--article", "onl-eurojackpot-teaser,\nonl-microsite", ".hero-main,\n.l0BoxBanner,\n.leaderBoardAd,\n.product-com-wrap,\n.top-brands", ".sfsi_outr_div", 'div[class^="banner-square-"]', "#banner-seminarji", ".ekosistem,\n.read-also-block", "#gkSidebar > .nomargin.box", "#app-messages,\n.article-related:nth-of-type(2)", ".opened", "#topBanner", ".lg\\:mb-0", ".module.banner", ".pattern > .span2,\n.span2:nth-of-type(3) > div", "#top_banner", ".bs-irp-thumbnail-3-full", "#article_bottom_author_butterfly,\n#bart_banner,\n#hbr,\n#siteHeaderPanorama,\n.adbox,\n.kos_semitrans,\n.taxo_block", "#adtopart,\n#article_social_top,\n#top > .nbs-flexisel-container", "#bannerFooter_wrap,\n.verde_wrap", ".advertisement", ".outFrameRight", ".banner-top-wrap,\n.banner1", "#promo", "#fan-exit,\n#fanback", ".hidden-sm,\n.signad,\n.sticky-position", "#reklama_desno,\n.navbar-right,\n.reklama_desno", ".other", ".ekode-content-dno", ".banner--wrapper,\n.content--cta,\n.exposed__banner,\n.region--cta", "#doyoulikeus,\n.hidden-xs,\n.portus-video-slider-min", "#billboard_outstream,\n#inline1,\n#inline2,\n#inline3-end,\n#mplayvideo,\n.adsbygoogle,\n.hidden-mobile", '.banner-scroller,\n.headbanner,\na[target="_blank"][href^="http://www.mlacom.si/iskalnik"]', ".fancybox-overlay,\n.info-box > .social", ".style-buttons.before_content", "#banner05,\n#skytower,\n.navigatortop,\n.titlered:nth-of-type(4)", ".nativendo-container,\n.prNews", ".nat-content", '.widget-wrapper:nth-of-type(5),\n.widget-wrapper:nth-of-type(6),\n[href="https://samopostrezna.com/"]', ".obcni-contentexchange,\n.obcni-widget", ".td-main-sidebar", ".banner-promotion,\n.banner-wrapper,\n.in-post-related-news,\n.third-party-menu-container", ".main-first.main > .index_right", ".sticky-wrapper", ".widget_custom_html", "#startPageRightLabel,\n#startPageRightResults", '.reklame-na-sredi,\n[id^="reklama"]', '#izpostavljeni,\n#show > .ban_item,\n#show > div > div > .ban_item,\n.image_carousel_post > [href^="/show//"],\n.lightface,\n.widget-shop', "#maincontent > .nospace > tbody > tr > td > .moduletable", ".external_wall_right_wrapper", "#divBannerjiDesnoZunaj > .reklamaDesnoZunaj,\n.reklamaDesnoZunaj > .presledek,\n.teloCenter > * > div:nth-of-type(12)", '#krka_bottom_billboard,\n#krka_top_billboard,\n.banner-box,\n.mb-g-20,\n[src^="//tdn.media24.si"]', ".divider-news,\n.h2501", "#DivShowBanners,\n#DivShowBannersForFrontPage,\n#bglink", "#newsletter-popup,\n.inverted-colors.teal.emphasis", ".monadplug-native-main-wrapper", ".moduletable_pasica", ".group_a__box7,\n.group_a__pos_banner_440,\n.group_a_category__box7,\n.iprom_ad,\n.pos-banner__article,\n.store_links", ".central_banner_inner_container,\n.news-banner,\ndiv > .side-banner", ".side_json_banners_1", "#banner_landscape,\n.containerinside,\n.partner-wrap", '#odkrito_bottom_billboard,\n#odkrito_bottom_kocka,\n#odkrito_middle_billboard,\n#odkrito_top_billboard,\n#odkrito_top_kocka,\n.bg-najnakupi-blue-light,\n.content > ul,\n.h-80,\n.justify-center.flex.container,\n.najnakupi,\n.najnakupi-news,\n.overflow-x-hidden,\n.promo-box,\n.right-sticky,\n.shadow-md.w-tk,\n.xl\\:container > .flex.justify-center,\n[id^="firstSiteBanner"]', ".lokalnoBox", ".main-left > .fpNews-title,\n.my-4 > .flex-wrap", "#kmetija_top_billboard", "#kum_bottom_billboard,\n#kum_top_billboard", "#mc4wp-form-1,\n.ai_widget,\n.widget_mt_latestposts_widget", "#exitpopup-modal,\n.display-posts-listing,\n.display-posts-title,\n.tdi_102,\n.tdi_97,\n.uw-showfootpanel", "#above-related-oglasi,\n#front-under-design-oglasi,\n#front-under-featured-oglas,\n#front-under-gardens-oglasi,\n#front-under-trends-oglas,\n#under-related-oglasi,\n.ai-track,\n.front-featured-oglas-wrap", '.ai-viewport-1,\n[id^="pukka-ad-widget-"]', "#banner_container,\n.baner", '[id^="oglasi"]', ".border-grey-light > .border-grey-light,\n.tvshow", "#oglassi2a,\n#vpopupwindow,\n.oglstih", "#bgbanner", '[id^="post"] > .article-content > .mashsb-main', ".article__aditionl_content,\n.related_article,\n.social__wrap", "#RightBanner" ],
        hostnamesMap: n,
        entitiesMap: e,
        exceptionsMap: a
    });
}();