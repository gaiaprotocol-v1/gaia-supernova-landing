import { BodyNode, ClosableFloatingDomNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import AOS from "aos";
import msg from "msg.js";
import BrowserInfo from "../BrowserInfo";

export default class Landing implements View {

    private container: DomNode;

    private menu: DomNode<HTMLInputElement>;

    constructor() {
        document.title = msg("TITLE");
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".landing-view",
                el("header.header",
                    el(".nav",
                        el(".logo",
                            el("a", { href: "#init" }, el("img", { src: "/images/logo/logo-none-text.png", alt: "gaia supernova logo" })),
                        ),
                        this.menu = el("input.menu-btn", { type: "checkbox", id: "menu-btn" }),
                        el("label.menu-icon", { for: "menu-btn" },
                            el("span.navicon"),
                        ),
                        el("ul.menu", { click: () => { this.menu.domElement.checked = !this.menu.domElement.checked } },
                            el("li.item", el("a", msg("FUND_MENU"), { href: "#fund" })),
                            el("li.item", el("a", msg("MINT_MENU"), { href: "#mint" })),
                            el("li.item", el("a", msg("SNEAKPEEK_MENU"), { href: "#nft" })),
                            el("li.item", el("a", msg("TEAM_MENU"), { href: "#team" })),
                            el("li.item", el("a.enter-app", "Enter App", { href: "https://app.gaiasupernova.com/", target: "_blank" })),
                            el("li.item", select = el("select.language-select",
                                el("option", "한국어 🇰🇷 ", { value: "ko" }),
                                el("option", "English 🇺🇸 ", { value: "en" }),
                                {
                                    change: () => {
                                        BrowserInfo.changeLanguage(select.domElement.value);
                                    },
                                },
                            )),
                        ),
                    )
                ),
                el("main",
                    el(".init-container", { id: "init" },
                        el("img", { "data-aos": "zoom-in" }, { src: "/images/logo/logo.png", alt: "gaia supernova logo" }),
                        el("p", { "data-aos": "zoom-in" }, msg("INIT_DESC")),
                        el("img.flow-map", { src: "/images/flow-map.png", alt: "flow map", "data-aos": "zoom-in" }),
                    ),
                    el(".video-container",
                        el("h2", { "data-aos": "zoom-in" }, msg("VIDEO_TITLE")),
                        el(".video", { "data-aos": "zoom-in" },
                            el("iframe", { width: "100%", height: "315px", src: "https://www.youtube.com/embed/Oqespb0LLjo", title: "gaia supernova introduction video" })
                        ),
                    ),
                    el(".why-container", { id: "fund" },
                        el("h2", { "data-aos": "zoom-in" }, msg("WHY_TITLE")),
                        el("p", { "data-aos": "zoom-in" }, msg("WHY_DESC"))
                    ),
                    el(".fund-container",
                        el("h2", { "data-aos": "zoom-in" }, msg("FUND_TITLE")),
                        el("p", { "data-aos": "zoom-in" }, msg("FUND_DESC"))
                    ),
                    el(".mint-container", { id: "mint" },
                        el("h2", { "data-aos": "zoom-in" }, msg("MINT_TITLE")),
                        el("h3", { "data-aos": "zoom-in" }, msg("MINT_VIP_TITLE")),
                        el("p", { "data-aos": "zoom-in" }, msg("MINT_VIP_DESC")),
                        el("a", { "data-aos": "zoom-in", href: "https://mint.gaiasupernova.com/", target: "_blank" }, "Go to Opensea"),
                    ),
                    el(".nft-container", { id: "nft" },
                        el("h2", { "data-aos": "zoom-in" }, msg("SNEAKPEEK_TITLE")),
                        el("section",
                            el("img", { "data-aos": "zoom-in", src: "/images/nft/nft1.png" }),
                            el("img", { "data-aos": "zoom-in", src: "/images/nft/nft2.png" }),
                            el("img", { "data-aos": "zoom-in", src: "/images/nft/nft3.png" }),
                            el("img", { "data-aos": "zoom-in", src: "/images/nft/nft4.png" }),
                            el("img", { "data-aos": "zoom-in", src: "/images/nft/nft5.gif" }),
                            el("img", { "data-aos": "zoom-in", src: "/images/nft/nft6.gif" }),
                        ),
                    ),
                    el(".team-container", { id: "team" },
                        el("h2", { "data-aos": "zoom-in" }, msg("TEAM_TITLE")),
                        el("section",
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE1")),
                                el("p", msg("TEAM_DESC1"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE2")),
                                el("p", msg("TEAM_DESC2"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE3")),
                                el("p", msg("TEAM_DESC3"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE4")),
                                el("p", msg("TEAM_DESC4"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE5")),
                                el("p", msg("TEAM_DESC5"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE6")),
                                el("p", msg("TEAM_DESC6"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE7")),
                                el("p", msg("TEAM_DESC7"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE8")),
                                el("p", msg("TEAM_DESC8"))
                            ),
                            el(".team", { "data-aos": "zoom-in" },
                                el("h3", msg("TEAM_TITLE9")),
                                el("p", msg("TEAM_DESC9"))
                            ),
                        ),
                    ),
                ),
                el("footer",
                    el(".footer-container",
                        el(".sns",
                            el("a.opensea", { href: "https://opensea.io/collection/gaia-supernova", target: "_blank" },
                                el("img", { src: "/images/community/opensea.svg" }),
                            ),
                            el("a.discord", { href: "https://discord.gg/gaia", target: "_blank" },
                                el("img", { src: "/images/community/discord.svg" }),
                            ),
                            el("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                                el("img", { src: "/images/community/twitter.svg" }),
                            ),
                            el("a.gitbook", { href: "https://gaiaprotocol.notion.site/Gaia-Supernova-Docs-7f6a1ea8c1294c9ca5669481270b2e78", target: "_blank" },
                                el("img", { src: "/images/community/gitbook.svg" }),
                            ),
                        ),
                        el(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"),
                    ),
                ),
            ))
        );
        this.init();
        select.domElement.value = BrowserInfo.language;
    }

    private async init() {
        AOS.init();
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
