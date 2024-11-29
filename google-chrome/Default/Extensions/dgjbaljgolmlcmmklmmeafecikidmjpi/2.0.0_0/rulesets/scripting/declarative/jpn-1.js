"use strict";

!function() {
    const t = new Map([ [ "pictab.art", 0 ], [ "b2.sakki2022.com", 0 ], [ "ero-gazou.jp", 0 ], [ "naitter.hippy.jp", 0 ], [ "my-nikki.net", 0 ], [ "animenew.be", 1 ], [ "jumpmatome2ch.biz", 2 ], [ "380cc.cc", 3 ], [ "afsgames.com", 4 ], [ "anige-sokuhouvip.com", 5 ], [ "asahi.com", 6 ], [ "telling.asahi.com", 7 ], [ "automaton-media.com", 8 ], [ "freesoft-100.com", 8 ], [ "avfuuzoku.com", 9 ], [ "avgle.com", 10 ], [ "battlecats-db.com", 11 ], [ "kledgeb.blogspot.com", 12 ], [ "ssbsblg.blogspot.com", 13 ], [ "ekr.chosunonline.com", 14 ], [ "life.chosunonline.com", 14 ], [ "www.chosunonline.com", 15 ], [ "dengekionline.com", 16 ], [ "digital-thread.com", 17 ], [ "itaishinja.com", 17 ], [ "oryouri.2chblog.jp", 17 ], [ "kyousoku.net", 17 ], [ "dq-dai.com", 18 ], [ "dqclear.com", 19 ], [ "e-nenpi.com", 20 ], [ "egotter.com", 21 ], [ "anime.eiga.com", 22 ], [ "ero-kawa.com", 23 ], [ "colordic.org", 23 ], [ "erologz.com", 24 ], [ "blog.esuteru.com", [ 25, 26 ] ], [ "otakomu.jp", [ 25, 26 ] ], [ "blog.fc2.com", 27 ], [ "kandatasokuho.blog.fc2.com", 28 ], [ "matometanews.com", 28 ], [ "vip-front.video.g.fc2.com", [ 29, 30 ] ], [ "video.fc2.com", [ 29, 30, 31 ] ], [ "ideo.laxd.com", 30 ], [ "ff10-hd.com", 32 ], [ "sheepplus.com", [ 32, 53 ] ], [ "winningpost8.com", [ 32, 63 ] ], [ "ff8clear.net", [ 32, 63 ] ], [ "ge-soku.com", 33 ], [ "gigaho.com", 34 ], [ "hitoikigame.com", 35 ], [ "hostlove.com", 36 ], [ "itainews.com", 37 ], [ "kabegamikan.com", 38 ], [ "t-mall.kantangame.com", 39 ], [ "knshow.com", 40 ], [ "kosoch.com", 41 ], [ "mapfan.com", 42 ], [ "medibang.com", 43 ], [ "minkch.com", 44 ], [ "mozakin.com", 45 ], [ "bbs4.mozakin.com", 46 ], [ "news-postseven.com", 47 ], [ "ovninavi.com", 48 ], [ "peko-step.com", 49 ], [ "saikyo-jump.com", 50 ], [ "security-next.com", 51 ], [ "sekai-kabuka.com", 52 ], [ "shindanmaker.com", 54 ], [ "shirotomaster.com", 55 ], [ "supercweather.com", 56 ], [ "takenokosokuhou.com", 57 ], [ "togetter.com", 58 ], [ "umaroidblog.com", 59 ], [ "uraaka.com", 60 ], [ "wazap.com", 61 ], [ "sp.jp.wazap.com", 62 ], [ "yamareco.com", 64 ], [ "young-machine.com", 65 ], [ "2game.info", 66 ], [ "applica.info", 67 ], [ "realtime-chart.info", 68 ], [ "gahalog.2chblog.jp", 69 ], [ "news.2chblog.jp", 70 ], [ "9db.jp", 71 ], [ "profile.ameba.jp", 72 ], [ "ameblo.jp", 73 ], [ "applion.jp", 74 ], [ "barks.jp", 75 ], [ "hiraganakeyaki.blog.jp", 76 ], [ "h-pon.doorblog.jp", 76 ], [ "sunri2525.blog.jp", 77 ], [ "bunshun.jp", 78 ], [ "allabout.co.jp", 79 ], [ "daily.co.jp", 80 ], [ "eguchi-hd.co.jp", 81 ], [ "lesson.golfdigest.co.jp", 82 ], [ "score.golfdigest.co.jp", 82 ], [ "news.jorudan.co.jp", 83 ], [ "friday.kodansha.co.jp", 84 ], [ "mapion.co.jp", 85 ], [ "estate.nikkan.co.jp", 86 ], [ "oricon.co.jp", 87 ], [ "wpb.shueisha.co.jp", 88 ], [ "teny.co.jp", 89 ], [ "tv-asahi.co.jp", 90 ], [ "video.tv-tokyo.co.jp", 91 ], [ "auctions.yahoo.co.jp", 92 ], [ "games.yahoo.co.jp", 93 ], [ "mail.yahoo.co.jp", 94 ], [ "map.yahoo.co.jp", 95 ], [ "weather.yahoo.co.jp", 96 ], [ "cosp.jp", 97 ], [ "dailynewsonline.jp", 98 ], [ "duellinks.doorblog.jp", 99 ], [ "shikaku2ch.doorblog.jp", 100 ], [ "figgy.jp", 101 ], [ "firecross.jp", 102 ], [ "gameranbu.jp", 103 ], [ "gizmodo.jp", 104 ], [ "guitarmagazine.jp", 105 ], [ "jikayosha.jp", 106 ], [ "jprime.jp", 107 ], [ "k-knuckles.jp", 108 ], [ "kakijun.jp", 109 ], [ "hrs-game.main.jp", 110 ], [ "main-hrs-game.ssl-lolipop.jp", 110 ], [ "musmus.main.jp", 111 ], [ "maonline.jp", 112 ], [ "minkabu.jp", 113 ], [ "minpo.jp", 114 ], [ "news.mynavi.jp", 115 ], [ "weather.biglobe.ne.jp", 116 ], [ "gamer.ne.jp", 117 ], [ "onlinegamer.jp", 117 ], [ "news.so-net.ne.jp", 118 ], [ "nicovideo.jp", 119 ], [ "okwave.jp", 120 ], [ "gdm.or.jp", 121 ], [ "otajo.jp", 122 ], [ "otonanswer.jp", 123 ], [ "piapro.jp", 124 ], [ "novel.prcm.jp", 125 ], [ "snrec.jp", 126 ], [ "soredoko.jp", 127 ], [ "tters.jp", 128 ], [ "twpf.jp", 129 ], [ "uranaitv.jp", 130 ], [ "uwl.weblio.jp", 131 ], [ "mangalove.me", 132 ], [ "picrew.me", 133 ], [ "gendai.media", 134 ], [ "4gamer.net", 135 ], [ "itest.5ch.net", 136 ], [ "buhidoh.net", 137 ], [ "roote.ekispert.net", 138 ], [ "azby.fmworld.net", 139 ], [ "intaa.net", 140 ], [ "logworker.net", 141 ], [ "ouminews.net", 142 ], [ "pokemon-matome.net", 143 ], [ "amigo.tennis365.net", 144 ], [ "twivideo.net", 145 ], [ "service.webgoto.net", 146 ], [ "gigafile.nu", 147 ], [ "b.best-hit.tv", 148 ] ]), o = new Map(void 0), e = new Map(void 0);
    self.declarativeImports = self.declarativeImports || [], self.declarativeImports.push({
        argsList: [ [ '{"selector":".pum-open","action":["style","overflow: auto !important;"]}' ], [ '{"selector":"#ad","action":["style","height: 1px !important;"]}' ], [ '{"selector":"#body-in > div[class^=\\"d-contents\\"]","action":["style","height: auto !important;"]}' ], [ '{"selector":"#playertopads","action":["style","height: 51px!important; position: absolute!important; left: -3000px!important;"]}' ], [ '{"selector":".ad970x250","action":["style","visibility: hidden !important; height: 0 !important;"]}' ], [ '{"selector":"#scroll.fixed","action":["style","position: static !important;"]}' ], [ '{"selector":".vjs-controls-disabled.vjs-error .vjs-control-bar","action":["style","display: block !important;"]}' ], [ '{"selector":".p-header-billboard","action":["style","min-height: 0 !important;"]}', '{"selector":".u-mb64 .p-new__row","action":["style","margin-top: 100px !important;"]}' ], [ '{"selector":"body","action":["style","background: none !important;"]}' ], [ '{"selector":"#top #head","action":["style","height: auto !important;"]}' ], [ '{"selector":"#player_3x2_close","action":["style","opacity: 0 !important; height: 300px !important;"]}' ], [ '{"selector":".adsbygoogle","action":["style","position: absolute!important;left: -4000px !important;"]}', '{"selector":"body[style=\\"display: none;\\"]","action":["style","display: block !important;"]}' ], [ '{"selector":"body > div[style=\\"visibility: hidden;\\"]","action":["style","visibility: visible !important;"]}' ], [ '{"selector":".btmads","action":["style","position: absolute !important; left: -3000px !important;"]}' ], [ '{"selector":".csh_main","action":["style","padding-top: 30px !important;"]}' ], [ '{"selector":".top_banner_area","action":["style","height: 44px !important"]}' ], [ '{"selector":".gPr.u-mtbM","action":["style","margin-top: 0 !important;"]}', '{"selector":".gPr_title.u-ttl01","action":["style","margin-top: 0 !important;"]}', '{"selector":".p-dol .gNews_title.u-ttl01","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"#sub","action":["style","position: static !important;"]}' ], [ '{"selector":"#lower section.character ul.character_list li.standby","action":["style","opacity: 1 !important;"]}' ], [ '{"selector":"#right","action":["style","padding-top: 25px !important;"]}' ], [ '{"selector":".gadget_topics > div.cont.last-child","action":["style","height: auto !important;"]}' ], [ '{"selector":".adsense-container","action":["style","height: 1px !important;"]}' ], [ '{"selector":"#subProgram","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"footer","action":["style","height: auto !important;"]}' ], [ '{"selector":"#sidebar-small[style^=\\"height:\\"]","action":["style","height: auto !important;"]}' ], [ '{"selector":".jackFix + div.siteContent","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":".siteRanking-main","action":["style","margin-left: 0!important;"]}' ], [ '{"selector":"#main-container","action":["style","padding: 0px 60px 80px !important;"]}' ], [ '{"selector":"#left","action":["style","position: static !important;"]}' ], [ '{"selector":".main_ad_head_wide","action":["style","padding-top: 0 !important;"]}', '{"selector":".with-ad[data-layout=\\"list\\"] .main-header","action":["style","width: 100% !important;"]}', '{"selector":".with-ad[data-layout=\\"list\\"][data-section-type=\\"new-video\\"] .content-wrap:nth-child(-1n+2)","action":["style","width: 100% !important;"]}' ], [ '{"selector":".app-container[aria-expanded=\\"false\\"] section.with-ad","action":["style","width: calc(100% - 20px) !important;"]}' ], [ '{"selector":".c-ad-103","action":["style","height: 0 !important;"]}' ], [ '{"selector":"#entry[class^=\\"e\\"]","action":["style","padding-bottom: 0 !important;"]}', '{"selector":"#new","action":["style","position: static !important;"]}', '{"selector":"#side[class^=\\"s\\"]","action":["style","padding-top: 0 !important;"]}' ], [ '{"selector":"#custom_html-48","action":["style","margin-top: 0px !important;"]}' ], [ '{"selector":".entry-content","action":["style","display: block!important;"]}', '{"selector":".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links","action":["style","display:block!important;"]}' ], [ '{"selector":".plugin-freearea td[bgcolor] > div[style]","action":["style","width: 100% !important;"]}' ], [ '{"selector":"#index_nav > h1","action":["style","padding-top: 30px!important;"]}', '{"selector":"body:not(.tp) > div#container > #main.template1","action":["style","padding-top: 20px !important;"]}' ], [ '{"selector":"#left[style^=\\"position: fixed\\"]","action":["style","position: static !important;"]}' ], [ '{"selector":"div[style=\\"width:730px;font-size:11pt;\\"] > table[width=\\"730\\"]","action":["style","width: 380px !important;"]}' ], [ '{"selector":"body[style=\\"padding: 0px 0px 154px;\\"]","action":["style","padding-bottom: 0 !important;"]}' ], [ '{"selector":".ads","action":["style","display: block!important;height: 1px!important;"]}' ], [ '{"selector":"#plugin2[style^=\\"position: fixed\\"]","action":["style","position: static !important;"]}' ], [ '{"selector":".nav-menu-width.margin.no-side-margin","action":["style","margin-top: 0 !important;"]}', '{"selector":".side-ad-area.half-margin","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"#content","action":["style","padding-bottom: 354px !important;"]}' ], [ '{"selector":".lsidebar[style^=\\"min-height\\"]","action":["style","min-height: auto !important;"]}' ], [ '{"selector":"#wrap01","action":["style","height: 2205px !important;"]}', '{"selector":".tabpain[style=\\"left: -260px; top: 280px;\\"]","action":["style","top: 0 !important;"]}', '{"selector":".tabpain[style=\\"top: 550px; left: 0px;\\"]","action":["style","top: -1120px !important;"]}' ], [ '{"selector":".adsepa","action":["style","height: 0 !important;"]}', '{"selector":".reply_txad","action":["style","border: 0 !important;"]}', '{"selector":".thread_txad","action":["style","border: 0 !important;"]}' ], [ '{"selector":"body[style^=\\"overflow:\\"]","action":["style","overflow: auto !important;"]}' ], [ '{"selector":"#cb-container","action":["style","padding-top: 110px !important;"]}', '{"selector":".ovni-header","action":["style","height: auto !important;"]}' ], [ '{"selector":"#cgrig_base_pic","action":["style","grid-auto-rows: auto !important;"]}', '{"selector":"#cgrig_cont","action":["style","grid-row-start: auto !important; grid-row-end: auto !important;"]}', '{"selector":"#cgrig_left","action":["style","grid-row-start: 3 !important; grid-row-end: 7 !important;"]}' ], [ '{"selector":".right-container","action":["style","position: static !important;"]}' ], [ '{"selector":".header","action":["style","height: 50px !important;"]}' ], [ '{"selector":"td[width=\\"160\\"] [style*=\\"position\\"] [id][style] ~ [onclick]","action":["style","pointer-events: none !important;"]}' ], [ '{"selector":"#main","action":["style","margin-bottom: 0 !important;"]}', '{"selector":"#side[class^=\\"ad\\"]","action":["style","border-top: 0 !important;"]}', '{"selector":".adh","action":["style","border-top: 0 !important;"]}' ], [ '{"selector":"div[id^=\\"div-gpt-\\"]","action":["style","min-height: 1px !important;"]}' ], [ '{"selector":"div[style=\\"margin: auto; width: 930px; height: 265px; text-align: center;\\"]","action":["style","height: 0 !important;"]}' ], [ '{"selector":"#content","action":["style","display: block !important; width: 100% !important; height: 100% !important;"]}' ], [ '{"selector":".fix_box-m","action":["style","position: static !important;"]}' ], [ '{"selector":".clearfix.contents","action":["style","min-height: auto !important;"]}' ], [ '{"selector":"#sidebar[style^=\\"height:\\"]","action":["style","height: auto !important;"]}' ], [ '{"selector":"body[style=\\"overflow-y: hidden;\\"]","action":["style","overflow-y: auto !important;"]}' ], [ '{"selector":".sub > div.section > span.heading","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"body[style=\\"position: fixed;\\"]","action":["style","position: static !important;"]}' ], [ '{"selector":"div#wrapper.on","action":["style","padding-top: 450px !important;"]}', '{"selector":"div.on h1","action":["style","top: 386px !important;"]}', '{"selector":"div.on nav#path","action":["style","top: 330px !important;"]}' ], [ '{"selector":"body.header_bg_ad.modal-open","action":["style","padding-right: auto !important; overflow: auto!important;"]}' ], [ '{"selector":".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed","action":["style","bottom: 0 !important;"]}' ], [ '{"selector":".sponsored-loop300x250","action":["style","position: absolute !important; left: -4000px !important;"]}' ], [ '{"selector":".l-contentsSub[style^=\\"height\\"]","action":["style","height: auto !important;"]}' ], [ '{"selector":"td[style^=\\"vertical-align\\"] [onclick]:has(> img[src*=\\"/clip_\\"] + b):not(:has(b td > a[href]))","action":["style","pointer-events: none !important;"]}', '{"selector":"td[style^=\\"vertical-align\\"] [onmousedown]:has(> img[src*=\\"/clip_\\"] + b):not(:has(b td > a[href]))","action":["style","pointer-events: none !important;"]}' ], [ '{"selector":"#sidebar[style^=\\"position: fixed\\"]","action":["style","position: static !important;"]}' ], [ '{"selector":"#side-r","action":["style","position: static !important;"]}' ], [ '{"selector":"#contents","action":["style","margin-bottom: 0 !important;"]}' ], [ '{"selector":".big-footer-article__container","action":["style","width: 656px !important;"]}' ], [ '{"selector":"#subAInner[style]","action":["style","position: static !important;margin-top: auto !important;"]}', '{"selector":"._2pnTOjTu","action":["style","width: auto !important;"]}' ], [ '{"selector":"#adcheck.ads-ad","action":["style","display: block!important;"]}' ], [ '{"selector":".c167:nth-child(2)","action":["style","margin-top: 0 !important;"]}', '{"selector":".c213:nth-child(2)","action":["style","margin-top: 0 !important;"]}', '{"selector":".c422:nth-child(2)","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":".right-container[style^=\\"position: fixed\\"]","action":["style","position: static !important;"]}' ], [ '{"selector":"._fukugan_grid","action":["style","height: auto!important;"]}' ], [ '{"selector":"div[class=\\"block recommend\\"]","action":["style","min-height: auto !important;"]}' ], [ '{"selector":".aa_footer","action":["style","padding-bottom: unset !important;"]}' ], [ '{"selector":".is-fixed.secondaryContents","action":["style","position: static !important; margin-left: auto !important;"]}' ], [ '{"selector":".hustle-no-scroll","action":["style","overflow: auto !important;"]}' ], [ '{"selector":"#wholeHeaderPane","action":["style","height: auto !important;"]}' ], [ '{"selector":".ad_common_1_970x250","action":["style","min-height: 0 !important;"]}' ], [ '{"selector":"body","action":["style","overflow: visible !important;"]}', '{"selector":"div[class^=\\"detail_photo_\\"]","action":["style","height: 100% !important; max-height: calc(100vh - 70px - 20px) !important;"]}', '{"selector":"img[class^=\\"detail_mainImage\\"]","action":["style","max-height: calc(100vh - 70px - 20px) !important;"]}' ], [ '{"selector":"#result_nav","action":["style","bottom: 0 !important;"]}' ], [ '{"selector":".center_column","action":["style","min-height: 1500px!important;"]}' ], [ '{"selector":".block-sub-ad + .block-sub","action":["style","margin-top: 0 !important;"]}', '{"selector":".block-sub-recommend[style=\\"margin-top:30px;\\"]","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"ul.mod-grid2:has(> li.block-list-a-a__list__item > div.block-banner-b-a)","action":["style","width: 50% !important;"]}', '{"selector":"ul.mod-grid2:has(> li.block-list-a-a__list__item > div[class$=\\"_InRecommend\\"])","action":["style","width: 50% !important;"]}' ], [ '{"selector":".s-ad","action":["style","height: 1px !important;"]}' ], [ '{"selector":"#common-header > div[class^=\\"common-header-pc-\\"]","action":["style","padding-top: 0 !important;"]}' ], [ '{"selector":"#tx7player[style*=\\"opacity: 0.\\"]","action":["style","opacity: 1 !important;"]}' ], [ '{"selector":"div[class^=\\"LayoutContentInner-sc\\"] > div[class^=\\"Promotion-sc\\"]","action":["style","grid-template-columns: 1fr 0 !important;"]}' ], [ '{"selector":".isJack","action":["style","margin-top: 0!important;"]}' ], [ '{"selector":"body.withsky div#shellcontent[style]","action":["style","right: 0 !important;"]}' ], [ '{"selector":".App__contentsMap[style=\\"height: calc(100% - 50px);\\"]","action":["style","height: 100% !important;"]}' ], [ '{"selector":"#ydn-bot","action":["style","visibility: hidden !important; height: 0 !important;"]}' ], [ '{"selector":".latestnewstable2014[height^=\\"1\\"]","action":["style","height: auto !important;"]}' ], [ '{"selector":"body[style*=\\"position\\"]","action":["style","position: static !important;"]}' ], [ '{"selector":".l-sidebar-b[style^=\\"position: fixed\\"]","action":["style","position: static !important;"]}' ], [ '{"selector":"#adnone","action":["style","height: 724px !important;"]}' ], [ '{"selector":".adBillBoardPC","action":["style","min-height: 0 !important"]}' ], [ '{"selector":"#stage","action":["style","max-height: 100% !important;"]}' ], [ '{"selector":"#sub-col-wrap_top280","action":["style","padding-top: 0 !important;"]}' ], [ '{"selector":".l-generalContent-secondary[style=\\"position: unset;\\"]","action":["style","position: sticky !important;"]}', '{"selector":"main > div.l-generalContent-secondary","action":["style","position: sticky !important;"]}' ], [ '{"selector":"body.tp-modal-open","action":["style","overflow: visible!important; touch-action: auto!important;"]}', '{"selector":"html.tp-scroll-prevented","action":["style","overflow: visible!important; touch-action: auto!important;"]}' ], [ '{"selector":".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed.is-pc-bottom","action":["style","bottom: 0 !important;"],"tasks":[["matches-media","(min-width: 641px)"]]}' ], [ '{"selector":".image-area","action":["style","opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;"]}', '{"selector":".js-article-wrap .article-body","action":["style","opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;"]}' ], [ '{"selector":"#breadcrumb","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"#hidari","action":["style","top: unset !important;"]}' ], [ '{"selector":".ads_native","action":["style","visibility: hidden !important;margin: 0 !important;"]}' ], [ '{"selector":"div[class*=\\"ad_\\"]","action":["style","height: 1px !important; width: 1px !important; min-height: 1px !important; padding: 0 !important; margin: 0 !important; overflow: hidden !important;"]}', '{"selector":"div[id^=\\"sub_ad\\"]","action":["style","height: 1px !important; width: 1px !important; min-height: 1px !important; padding: 0 !important; margin: 0 !important; overflow: hidden !important;"]}' ], [ '{"selector":".media_article .articlegroups .d-block:not(:first-of-type)","action":["style","border-top: none !important; padding-top: 0 !important;"]}' ], [ '{"selector":".ly_content_wrapper","action":["style","margin-bottom: 0!important;"]}' ], [ '{"selector":".ads970","action":["style","height: 0 !important; min-height: 0 !important;"]}' ], [ '{"selector":".articleList-attention[style^=\\"min-height\\"]","action":["style","min-height: auto !important;"]}' ], [ '{"selector":"#header","action":["style","height:60px !important;"]}' ], [ '{"selector":".adBillboard_pc","action":["style","height: 0 !important; min-height: 0 !important; margin-bottom: 0 !important;"]}' ], [ '{"selector":".MuiGrid-container.MuiGrid-root[style*=\\"min-height:\\"]","action":["style","min-height: auto!important;"]}', '{"selector":".MuiGrid-item.MuiGrid-root[style*=\\"min-height:\\"]","action":["style","min-height: auto!important;"]}' ], [ '{"selector":".BottomContainer.InView","action":["style","min-height:auto !important;"]}' ], [ '{"selector":".following_buttons_upper","action":["style","bottom: 0 !important;"]}' ], [ '{"selector":"#asideRight .box.bottom","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"#writerprofile + aside.adsense","action":["style","height: 90px !important; width: 0 !important;"]}' ], [ '{"selector":".side[style^=\\"height\\"]","action":["style","height: auto !important;"]}' ], [ '{"selector":"#footer","action":["style","height: auto !important;"]}', '{"selector":"#main[style=\\"padding-bottom:300px;\\"]","action":["style","padding-bottom: 170px !important;"]}' ], [ '{"selector":"body.app-scroll-lock","action":["style","position: relative!important;overflow-y: unset !important;"]}' ], [ '{"selector":"body.tp-modal-open","action":["style","overflow: visible!important;"]}' ], [ '{"selector":"#srdk-index-native-pc ~ li.rank-7","action":["style","margin-left: 20px !important;"]}', '{"selector":"#srdk-index-native-pc ~ li.rank-8","action":["style","margin-left: 0 !important;"]}' ], [ '{"selector":".ad-section","action":["style","height: 10px !important; position: absolute !important; left: -3000px !important;"]}' ], [ '{"selector":"#signin-with-twitter","action":["style","margin-bottom: 0 !important;"]}' ], [ '{"selector":".fortune-submit","action":["style","display: block !important;"]}' ], [ '{"selector":"#main","action":["style","width:auto !important; padding-left:15px !important;"]}', '{"selector":".tngMainT","action":["style","width:100% !important;"]}' ], [ '{"selector":".viewer, .viewer .imgWrap, .viewer .lastPage.slick-slide, .viewer .slick-list, .viewer .slick-track, .viewerBody","action":["style","height: 100% !important;"]}' ], [ '{"selector":".view_pc div[class] > div.play-Imagemaker","action":["style","max-height: 100% !important; height: 100% !important;"]}' ], [ '{"selector":".blockContainer[style$=\\"-60px auto;\\"] > div[style=\\"min-height: 90px;\\"]","action":["style","min-height: 1px !important;"]}', '{"selector":".sideContents.ie-sticky[style$=\\"min-height: 1500px;\\"]","action":["style","min-height: auto !important;"]}' ], [ '{"selector":".medipartner","action":["style","position: static !important;"]}' ], [ '{"selector":"#js-forms","action":["style","height: auto !important;"]}', '{"selector":".bbsmenu-with-ad","action":["style","padding-bottom: 0 !important;"]}' ], [ '{"selector":"#center-left","action":["style","height: auto !important;"]}' ], [ '{"selector":"#bottom_area","action":["style","height: 1px !important;"]}' ], [ '{"selector":".side_box","action":["style","padding-top: 0 !important;"]}' ], [ '{"selector":"#adsidetop","action":["style","display: block !important; height: 51px !important;"]}', '{"selector":"#adstop","action":["style","display: block !important; height: 51px !important;"]}', '{"selector":"#adunit-10","action":["style","display: block !important; height: 51px !important;"]}', '{"selector":"#adunit-11","action":["style","display: block !important; height: 51px !important;"]}' ], [ '{"selector":".entry-content","action":["style","display: block !important;"]}' ], [ '{"selector":".ad_unit.ad-unit.text-ad.text_ad.pub_300x250","action":["style","display: block !important;"]}' ], [ '{"selector":"#header_rtranking","action":["style","top: 120px !important;"]}', '{"selector":"div[id^=\\"container_in\\"]","action":["style","margin-top: 240px !important;"]}' ], [ '{"selector":".google","action":["style","visibility: hidden !important;"]}' ], [ '{"selector":".inv_scroll_cancel","action":["style","overflow: auto !important; height: auto !important;"]}' ], [ '{"selector":".image_box[style*=\\"amazon.co\\"]","action":["style","background: none !important;"]}' ], [ '{"selector":"#wrap_contents_box","action":["style","min-height: 676px !important;"]}' ], [ '{"selector":".ad.ads.adsbygoogle.ad1.ad-space.adbox.imggif.ad-banner.amp_ad.file-display-area","action":["style","display: block !important;"]}' ] ],
        hostnamesMap: t,
        entitiesMap: o,
        exceptionsMap: e
    });
}();