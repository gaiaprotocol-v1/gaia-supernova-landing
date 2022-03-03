import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import AOS from "aos";
import msg from "msg.js";
import BrowserInfo from "../BrowserInfo";

export default class Landing implements View {

    private container: DomNode;

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
                        el("input.menu-btn", { type: "checkbox", id: "menu-btn" }),
                        el("label.menu-icon", { for: "menu-btn" },
                            el("span.navicon"),
                        ),
                        el("ul.menu",
                            el("li.item", el("a", msg("WHY_MENU"), { href: "#why" })),
                            el("li.item", el("a", msg("FUND_MENU"), { href: "#fund" })),
                            el("li.item", el("a", msg("MINT_MENU"), { href: "#mint" })),
                            el("li.item", el("a", msg("SNEAKPEEK_MENU"), { href: "#nft" })),
                            el("li.item", el("a", msg("TEAM_MENU"), { href: "#team" })),
                            el("li.item", el("a.enter-app", "SuperNova", { href: "#mint" })),
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
                        el("p", { "data-aos": "zoom-in" }, msg("INIT_DESC"))
                    ),
                    el(".why-container", { id: "why" },
                        el("h2", { "data-aos": "zoom-in" }, msg("WHY_TITLE")),
                        el("p", { "data-aos": "zoom-in" }, msg("WHY_DESC"))
                    ),
                    el(".fund-container", { id: "fund" },
                        el("h2", { "data-aos": "zoom-in" }, msg("FUND_TITLE")),
                        el("p", { "data-aos": "zoom-in" }, msg("FUND_DESC"))
                    ),
                    el(".mint-container", { id: "mint" },
                        el("h2", { "data-aos": "zoom-in" }, msg("MINT_TITLE")),
                        el("h3", { "data-aos": "zoom-in" }, "- 총 1,000개 -"),
                        el("h3", { "data-aos": "zoom-in" }, msg("MINT_VIP_TITLE")),
                        el("p", { "data-aos": "zoom-in" }, msg("MINT_VIP_DESC")),
                        el(".caption", { "data-aos": "zoom-in" }, "1,000 Klay"),
                        el("h3", { "data-aos": "zoom-in" }, msg("MINT_PUBLIC_TITLE")),
                        el("p", { "data-aos": "zoom-in" }, msg("MINT_PUBLIC_DESC")),
                        el(".caption", { "data-aos": "zoom-in" }, "1,000 Klay"),
                    ),
                    el(".nft-container", { id: "nft" },
                        el("h2", { "data-aos": "zoom-in" }, msg("SNEAKPEEK_TITLE")),
                    ),
                    el(".team-container", { id: "team" },
                        el("h2", { "data-aos": "zoom-in" }, msg("TEAM_TITLE")),
                    ),
                ),
                el("footer",
                    el(".footer-container",
                        el(".sns",
                            el("a.opensea", { href: "https://opensea.io/collection/gaia-kronos", target: "_blank" },
                                el("img", { src: "/images/community/opensea.svg", width: "40" }),
                            ),
                            el("a.discord", { href: "https://discord.gg/gaia", target: "_blank" },
                                el("img", { src: "/images/community/discord.svg" }),
                            ),
                            el("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                                el("img", { src: "/images/community/twitter.svg" }),
                            ),
                            el("a.gitbook", { href: "https://docs.gaiakronos.com/kr/", target: "_blank" },
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
