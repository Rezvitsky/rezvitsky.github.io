! function(e) {
	function t(t) {
		for (var i, a, c = t[0], l = t[1], s = t[2], u = 0, h = []; u < c.length; u++) a = c[u], Object.prototype.hasOwnProperty.call(o, a) && o[a] && h.push(o[a][0]), o[a] = 0;
		for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
		for (d && d(t); h.length;) h.shift()();
		return r.push.apply(r, s || []), n()
	}

	function n() {
		for (var e, t = 0; t < r.length; t++) {
			for (var n = r[t], i = !0, a = 1; a < n.length; a++) {
				var l = n[a];
				0 !== o[l] && (i = !1)
			}
			i && (r.splice(t--, 1), e = c(c.s = n[0]))
		}
		return e
	}
	var i = {},
		a = {
			app: 0
		},
		o = {
			app: 0
		},
		r = [];

	function c(t) {
		if (i[t]) return i[t].exports;
		var n = i[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
	}
	c.e = function(e) {
		var t = [];
		a[e] ? t.push(a[e]) : 0 !== a[e] && {
			"chunk-02375877": 1
		} [e] && t.push(a[e] = new Promise((function(t, n) {
			for (var i = "css/" + ({} [e] || e) + "." + {
					"chunk-02375877": "a5de9f6c"
				} [e] + ".css", o = c.p + i, r = document.getElementsByTagName("link"), l = 0; l < r.length; l++) {
				var s = (d = r[l]).getAttribute("data-href") || d.getAttribute("href");
				if ("stylesheet" === d.rel && (s === i || s === o)) return t()
			}
			var u = document.getElementsByTagName("style");
			for (l = 0; l < u.length; l++) {
				var d;
				if ((s = (d = u[l]).getAttribute("data-href")) === i || s === o) return t()
			}
			var h = document.createElement("link");
			h.rel = "stylesheet", h.type = "text/css", h.onload = t, h.onerror = function(t) {
				var i = t && t.target && t.target.src || o,
					r = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
				r.code = "CSS_CHUNK_LOAD_FAILED", r.request = i, delete a[e], h.parentNode.removeChild(h), n(r)
			}, h.href = o, document.getElementsByTagName("head")[0].appendChild(h)
		})).then((function() {
			a[e] = 0
		})));
		var n = o[e];
		if (0 !== n)
			if (n) t.push(n[2]);
			else {
				var i = new Promise((function(t, i) {
					n = o[e] = [t, i]
				}));
				t.push(n[2] = i);
				var r, l = document.createElement("script");
				l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = function(e) {
					return c.p + "js/" + ({} [e] || e) + "." + {
						"chunk-02375877": "30342446"
					} [e] + ".js"
				}(e);
				var s = new Error;
				r = function(t) {
					l.onerror = l.onload = null, clearTimeout(u);
					var n = o[e];
					if (0 !== n) {
						if (n) {
							var i = t && ("load" === t.type ? "missing" : t.type),
								a = t && t.target && t.target.src;
							s.message = "Loading chunk " + e + " failed.\n(" + i + ": " + a + ")", s.name = "ChunkLoadError", s.type = i, s.request = a, n[1](s)
						}
						o[e] = void 0
					}
				};
				var u = setTimeout((function() {
					r({
						type: "timeout",
						target: l
					})
				}), 12e4);
				l.onerror = l.onload = r, document.head.appendChild(l)
			} return Promise.all(t)
	}, c.m = e, c.c = i, c.d = function(e, t, n) {
		c.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, c.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, c.t = function(e, t) {
		if (1 & t && (e = c(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (c.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var i in e) c.d(n, i, function(t) {
				return e[t]
			}.bind(null, i));
		return n
	}, c.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return c.d(t, "a", t), t
	}, c.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, c.p = "/", c.oe = function(e) {
		throw e
	};
	var l = window.webpackJsonp = window.webpackJsonp || [],
		s = l.push.bind(l);
	l.push = t, l = l.slice();
	for (var u = 0; u < l.length; u++) t(l[u]);
	var d = s;
	r.push([0, "chunk-vendors"]), n()
}({
	0: function(e, t, n) {
		e.exports = n("56d7")
	},
	"0012": function(e, t) {
		new function() {
			var e = this;
			e.width = 375, e.fontSize = 100, e.widthProportion = function() {
				var t = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / e.width;
				return t > 1 ? 1 : t < .5 ? .5 : t
			}, e.changePage = function() {
				document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + e.widthProportion() * e.fontSize + "px !important")
			}, e.changePage(), window.addEventListener("resize", (function() {
				e.changePage()
			}), !1)
		}
	},
	"108e": function(e, t, n) {
		"use strict";
		n("2a65")
	},
	"2a65": function(e, t, n) {},
	"3ea0": function(e, t, n) {},
	4360: function(e, t, n) {
		"use strict";
		var i = n("a026"),
			a = n("2f62"),
			o = n("0e44");
		i.default.use(a.a), t.a = new a.a.Store({
			state: {
				lang: ""
			},
			getters: {
				lang: function(e) {
					return e.lang
				}
			},
			mutations: {
				SET_LANG: function(e, t) {
					e.lang = t
				}
			},
			plugins: [Object(o.a)()]
		})
	},
	"467d": function(e, t, n) {
		"use strict";
		n.r(t), t.default = {
			synopsis: "简介",
			characteristic: "特性",
			get: "获得",
			community: "社群",
			culture: "文化",
			heco_chain: "火币生态链Heco",
			binance_chain: "币安智能链BSC",
			ethereum_chain: "以太坊链",
			meme_token: "币安智能链上的首个MEME TOKEN / 火币生态链上的首个MEME TOKEN",
			lion_title: "GRF是什么？",
			lion_text: "GRF狮币是一场基于火币生态链、币安智能链，GateChain芝麻链的100％去中心化自发社区建设的实验，GRF总计200亿枚并且自动实现每笔交易数量的千分之一销毁通缩，50亿枚令牌已发送给火币生态链Heco上的GRF/HT流动性池里供全球用户从0开始公平公正的兑换；50亿枚令牌已发布在币安智能链BSC上，其中5000万枚已发布GRF/BNB流动性池供全球用户统一时间从0开始兑换，5000万枚面向Twitter/Telegram社群用户进行空投，49亿枚进入矿池供全球用户挖矿获得；10亿枚令牌已发布在以太坊上供跨链兑换；另外90亿枚令牌待发布在GateChain芝麻链及未来符合社群认可的主链上。",
			chain_title: "更多主链 创新分发 惊喜期待！",
			happy_coins: "与狗狗币、柴犬币、秋田犬币共同起舞！",
			community_text: "GRF币向狗狗币DOGE的社群文化和贡献致敬，并紧紧跟随以太坊上的 SHIB（柴犬币）、秋田犬币(AKITA)且独具创新GRF币智能合约里全球首创每次链上交易都会自动扣除交易数量的千分之一自动打入永久的黑洞地址，实现全自动的通缩机制，在更友好、更适合全球区块链用户群体的火币、币安、芝麻链上（几乎秒级的高效交易，几乎为0的低手续费）跟随这场去中心化自发社区建设的伟大实验，GRF正在自动经历一场完美的彻底的去中心化和创造独有的社群文化的奇幻旅程。",
			characteristic_title: "全球首创链上自动通缩模式",
			characteristic_title1_1: "{x}‰ ",
			characteristic_title1: "链上交易自动销毁，极致通缩！",
			characteristic_title2: "三大创新:",
			characteristic_text1: "1.多链齐发，跨链全自动充提兑换。完全去中心化，公平分发，是一场 all from zero的社会实验。",
			characteristic_text2: "2.GRF币智能合约里每次链上交易都会自动扣除交易数量的千分之一GRF自动打入永久的黑洞地址，实现全自动的通缩机制。BSC上的GRF合约同时增加了新的机制！链上交易数量低于或等于100万，500万，1000万，大于1000万枚GRF时分别扣除10%，8%，5%，3%并实时变成GRF-BNB自动添加流动性！",
			characteristic_text3: "3.同时支持NFT挖矿和流动性挖矿！每天自动从创世流动性的地址里取3%流动性的GRF-BNB（GRF-HT）创新机制，其中GRF转入挖矿的矿池奖励里，BNB自动Swap买成GRF再转入矿池奖励里！",
			characteristic_text4: "小知识：取走3%等于只取走了GRF用于挖矿奖励并没有取走BNB（HT）。结果是用于挖矿奖励的GRF矿池持续变多。流动性里的GRF变少而BNB不变造成GRF价格自动每天变化一次。",
			decentralization_title: "去中心化 自动发展  全自动销毁机制",
			decentralization_title1: "每一次链上流动 都有千分之一自动销毁  理论上200亿枚*1000的交易量就全部销毁光",
			decentralization_text_heco: "黑洞地址<br>（火币生态链）",
			decentralization_text_binance: "黑洞地址<br>（币安智能链）",
			decentralization_text_ethereum: "黑洞地址<br>（以太坊）",
			decentralization_text2: "（累计交易量达到200亿*1000 时就等于通缩到一枚不剩。）",
			get_title: "如何获得GRF？",
			get_title1: "所有热爱GRF社群文化的人都可以通过如下任意一种方式，获得GRF狮币，拥有狮币共建社群文化。",
			coming_soon: "即将发布",
			get_heco_chain: "火币生态链Heco",
			get_gate_chain: "GATE芝麻开门交易平台",
			get_binance_chain: "币安智能链BSC",
			get_biki: "BiKi",
			get_liquidity_num_blue: "0.5亿枚",
			get_liquidity_text_blue: "流动性注入<br>全球同时开始从0兑换！",
			get_liquidity_num_red: "49亿枚",
			get_liquidity_text_red: "矿池注入<br>全球同时开始挖矿！",
			lion_address_chain_title: "GRF狮币欢迎全球各大交易平台支持GRF的交易，共享我们的社群流量热度。",
			lion_address_chain_title1: "GRF Token智能合约地址：",
			lion_address_heco_chain: "火币生态链合约地址：",
			lion_address_binance_chain: "币安智能链合约地址：",
			lion_address_ethereum_chain: "以太坊合约地址：",
			copy_address: "复制地址",
			copy_address_suc: "复制成功",
			community_title: "GRF全球社群",
			community_lion_text: "GRF是一个具有鲜明区块链精神的项目，它是一个分布式自治社区的实验，它和狗狗币的兴起有相似之处，完全社区启动，无利益优先方，社区的人自愿根据自身才能为项目添砖加瓦。GRF社区的人因共识而汇聚在一起，自发布以来，GRF组建了一个庞大且充满创造力的社区，各类社区（电报、推特）人数正在快速增长中。它有一种内在的娱乐性，如同狗狗币，天然信任！GRF社群由全球各地社群用户自行建立，GRF属于社群。全面拥抱狗狗DOGE社群。",
			culture_title: "GRF文化是什么？",
			culture_text1: "GRF的文化还在逐步形成。GRF是去中心化自发社区建设的实验。社区是这个项目的核心，并将继续发展和扩大。",
			culture_text2: "GRF共识：由社区自发形成，然后不断扩散，最后成长成世界级的共识。",
			culture_text3: "GRF是一场关于0的社会实验，是一场，一切从零开始的社会实验，是一场 all from zero的社会实验。",
			culture_text4: "文化起源：GRF，一个属于卡通世界的平行宇宙，永远充满了童心和友爱的社群。向人类历史上全球所有被创造出来的卡通形象，也就是在平行宇宙的卡通世界里一个个充满个性的卡通角色致敬。小时候，看完The GRF King，我们也多么希望长大后可以像Simba那样勇敢和变得强大守护一切。这就是卡通的力量。GRF，属于地球上每一个想要守护身边一切美好的人类。",
			culture_text5: "未来，我们将会由社群发起建立GRF基金池，接收来自全球的热爱GRF的社群用户的热心捐助，用于捐助所有值得帮助的卡通艺术家，濒临灭绝物种、流浪动物拯救基金等。",
			lion_footer: "GRF - Defi Cartoon Metaverse  宙狮 -  去中心化卡通元宇宙",
			lion_footer_text: "错过了DOGE？错过了SHIB？又错过了SAFEMOON？这一次你一定不要错过GRF！"
		}
	},
	"56d7": function(e, t, n) {
		"use strict";
		n.r(t), n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var i = n("a026"),
			a = n("5530"),
			o = n("2f62"),
			r = {
				name: "App",
				data: function() {
					return {}
				},
				components: {},
				computed: Object(a.a)({}, Object(o.b)(["lang"])),
				created: function() {
					this.getLang()
				},
				methods: {
					getLang: function() {
						var e = navigator.language || navigator.userLanguage;
						this.lang || ("zh-CN" == e || "en-US" == e ? this.store.commit("SET_LANG", e) : this.store.commit("SET_LANG", "en-US"))
					}
				}
			},
			c = (n("108e"), n("94fb"), n("2877")),
			l = Object(c.a)(r, (function() {
				var e = this.$createElement,
					t = this._self._c || e;
				return t("div", {
					attrs: {
						id: "app"
					}
				}, [t("router-view")], 1)
			}), [], !1, null, "4be98ba2", null).exports,
			s = (n("99af"), n("8c4f")),
			u = (n("d3b7"), n("3ca3"), n("ddb0"), function() {
				return n.e("chunk-02375877").then(n.bind(null, "37f9"))
			}),
			d = [{
				path: "/",
				name: "Index",
				component: u,
				meta: {
					title: "Index",
					key: "index"
				}
			}, {
				path: "/index",
				name: "Index",
				component: u,
				meta: {
					title: "Index",
					key: "index"
				}
			}];
		i.default.use(s.a);
		var h = new s.a({
			mode: "history",
			routes: [].concat(d)
		});
		i.default.routerGo = h, h.beforeEach((function(e, t, n) {
			n()
		}));
		var m = h,
			f = n("4360"),
			p = (n("0012"), n("a925"));
		i.default.use(p.a);
		var g = new p.a({
				locale: f.a.state.lang,
				messages: {
					"zh-CN": n("467d").default,
					"en-US": n("a638").default
				}
			}),
			_ = (n("be4f"), n("450d"), n("896a")),
			y = n.n(_),
			b = (n("0fb7"), n("f529")),
			N = n.n(b),
			O = (n("0fb4"), n("9944")),
			w = n.n(O),
			L = (n("bd49"), n("18ff")),
			I = n.n(L),
			v = (n("960d"), n("defb")),
			x = n.n(v),
			T = (n("cb70"), n("b370")),
			k = n.n(T),
			B = (n("a7cc"), n("df33")),
			C = n.n(B),
			E = (n("1951"), n("eedf")),
			S = n.n(E);
		i.default.use(S.a), i.default.use(C.a), i.default.use(k.a), i.default.use(x.a), i.default.use(I.a), i.default.use(w.a), i.default.prototype.$message = N.a, i.default.prototype.$loading = y.a.service;
		var z = n("ed08");
		i.default.config.productionTip = !1, i.default.prototype.store = f.a;
		var A = 0;
		A = Object(z.a)() ? 50 : 70, i.default.directive("anchor", {
			inserted: function(e, t) {
				e.onclick = function() {
					$(document.documentElement).animate({
						scrollTop: $("#anchor-" + t.value).offset().top - A
					}, {
						duration: 1e3,
						easing: "swing"
					})
				}
			}
		}), new i.default({
			router: m,
			i18n: g,
			store: f.a,
			render: function(e) {
				return e(l)
			}
		}).$mount("#app")
	},
	"94fb": function(e, t, n) {
		"use strict";
		n("3ea0")
	},
	a638: function(e, t, n) {
		"use strict";
		n.r(t), t.default = {
			synopsis: "About",
			characteristic: "Tokenomics",
			get: "Buy",
			community: "Community",
			culture: "Culture",
			heco_chain: "Huobi Eco Chain Heco",
			binance_chain: "Binance Smart Chain BSC",
			ethereum_chain: "Ethereum Chain",
			meme_token: "The first MEME Token on Binance Smart Chain! The First MEME Token on Huobi Eco Chain! ",
			lion_title: "What is GRF Token?",
			lion_text: "GRF Token is an experiment in decentralized spontaneous community building based on the Huobi Eco Chain, Binance Smart Chain, and GateChain. The total amount of LION Token is 20 billion and it automatically destroys one-thousandth of each transaction done for deflation. 5 Billion tokens have been sent to the GRF/HT liquidity pool on the Huobi Eco Chain Heco for global users to exchange fairly and justly from 0. 5 billion tokens have been released on the Binance Smart Chain BSC, of which 50 million have been released in the GRF/BNB liquidity pool for global users to redeem from 0 at a unified time, and 50 million have been airdropped to Twitter/Telegram community users. 4.9 billion pieces entered the mining pool for global users to mine. 1 billion tokens have been released on Ethereum for cross-chain exchange. Another 9 billion tokens will be released on the GateChain and on the main chain that is recognised by the community very soon in the near future.",
			chain_title: "Many more main chain coming soon, stay tuned!",
			happy_coins: "Lets Dance with Dogecoin, Shiba Token, and Akita Token!",
			community_text: "GRF Token pays tribute to the community culture and contribution of Dogecoin DOGE, and closely follows the SHIB (Shiba token) and Akita coin (AKITA) on Ethereum. The unique innovative GRF Token smart contract is the world's first of which every transaction done will automatically deduct one-thousandth of the transaction amount and automatically deposited into the permanent black hole address to achieve a fully automatic deflation mechanism. Base on the more friendly and more suitable for global blockchain user groups platform like Huobi, Binance, and GateChain (High-efficiency transactions in seconds, and low handling fees of almost 0) this great experiment of decentralized spontaneous community construction, GRF is automatically experiencing a perfect and complete decentralization and creating a unique fantasy journey of community culture.",
			characteristic_title: "World first automatic deflation mechanism",
			characteristic_title1_1: "{x}‰ ",
			characteristic_title1: "Automated disposal system, maximizing deflation mechanism!",
			characteristic_title2: "Three major innovations:",
			characteristic_text1: "1. Multi-chain distribution, cross-chain automatic deposit, withdrawal and exchange Complete decentralization, fair distribution, is an all from zero social experiment.",
			characteristic_text2: "2. Each on-chain transaction in the GRF coin smart contract will automatically deduct one-thousandth of the transaction amount. GRF will automatically enter the permanent black hole address to achieve a fully automatic deflation mechanism. The LION contract on BSC also adds a new mechanism! When the number of transactions on the chain is less than or equal to 1 million, 5 million, 10 million, and greater than 10 million GRFs, 10%, 8%, 5%, and 3% will be deducted respectively and become GRF-BNB to automatically add liquidity in real time!",
			characteristic_text3: "3. Support NFT mining and liquidity mining at the same time! The 3% liquidity GRF-BNB (GRF-HT) innovation mechanism is automatically taken from the creation liquidity address every day, in which LION is transferred to the mining pool reward for mining, and BNB is automatically swapped to buy GRF and then transferred to the mining pool In the reward!",
			characteristic_text4: "Tips: Taking away 3% is equivalent to only taking away GRF for mining rewards and not taking away BNB (HT). As a result, the number of GRF mining pools used for mining rewards continues to increase. The LION in the liquidity becomes less and the BNB remains unchanged, causing the GRF price to automatically change once a day.",
			decentralization_title: "Decentralization, automatic development, automatic destruction mechanism",
			decentralization_title1: "Every time the chain flows, one-thousandths of it is automatically destroyed. In theory, the transaction volume of 20 billion * 1000 will be completely destroyed",
			decentralization_text_heco: "Black hole address<br/>(Hubi Eco Chain)",
			decentralization_text_binance: "Black hole address<br/>(Binance Smart Chain)",
			decentralization_text_ethereum: "Black hole address<br>(Ethereum)",
			decentralization_text2: "(Black hole address, when the cumulative transaction volume reaches 20 billion*1000, it is equal to deflation and there is not one left.)",
			get_title: "How to get GRF?",
			get_title1: "All those who love the culture of the GRF community can obtain GRF Token through any of the following methods, and have GRF Token to build a community culture together.",
			coming_soon: "Coming soon",
			get_heco_chain: "Huobi Eco Chain Heco",
			get_gate_chain: "Gatechain",
			get_binance_chain: "Binance Smart Chain BSC",
			get_biki: "BiKi",
			get_liquidity_num_blue: "50 million pieces",
			get_liquidity_text_blue: "Of liquidity are injected,<br>and the world starts to exchange from 0 at the same time!",
			get_liquidity_num_red: "4.9 billion",
			get_liquidity_text_red: "Tokens were injected into the mining pool,<br>and the world started mining at the same time!",
			lion_address_chain_title: "GRF Token welcomes major trading platforms around the world to support GRF transactions and share our community traffic enthusiasm.",
			lion_address_chain_title1: "GRF Token Smart Contract Address:",
			lion_address_heco_chain: "Huobi Eco Chain Contract Address: ",
			lion_address_binance_chain: "Binance Smart Chain Contract Address: ",
			lion_address_ethereum_chain: "Ethereum Contact Address: ",
			copy_address: "Copy address",
			copy_address_suc: "Copied",
			community_title: "GRF global community",
			community_lion_text: "GRF is a project with a clear blockchain spirit. It is an experiment in a distributed autonomous community. It has similarities with the rise of Dogecoin. It is completely community-based and has no benefit priority. The people in the community voluntarily base their own talent Contribute to the project. People in the GRF community have gathered together because of consensus. Since its release, GRF has formed a large and creative community, and the number of people in various communities (Telegram, Twitter) is growing rapidly. It has an inherent entertainment, like Dogecoin, natural trust!The GRF community is established by community users from all over the world, and GRF belongs to the community. Embrace the DOGE community in an all-round way.",
			culture_title: "What is GRF culture?",
			culture_text1: "GRF's culture is still gradually taking shape. GRF is an experiment in decentralized spontaneous community construction. The community is the core of this project and will continue to grow and expand.",
			culture_text2: "GRF consensus: spontaneously formed by the community, then continue to spread, and finally grow into a world-class consensus.",
			culture_text3: "GRF is a social experiment about zero, a social experiment that starts from zero, and an all from zero social experiment.",
			culture_text4: "Cultural origin: GRF, a parallel universe belonging to the cartoon world, is always full of childlike and friendly communities. Pay tribute to all the cartoon images created in the world in the history of mankind, that is, the cartoon characters full of personality in the cartoon world of the parallel universe. When we were young, after watching The GRF King, we also hope that when we grow up, we can be as brave and strong as Simba to guard everything. This is the power of cartoons. GRF belongs to every human being on earth who wants to protect all the good things around him.",
			culture_text5: "In the future, we will initiate the establishment of the GRF fund pool by the community to receive enthusiastic donations from community users who love GRF from all over the world to donate to all cartoon artists worthy of help, endangered species, stray animal rescue funds, etc.",
			lion_footer: "GRF - Defi Cartoon Metaverse",
			lion_footer_text: "Missed DOGE? Missed SHIB? Missed SAFEMOON again? This time, you must not miss GRF!"
		}
	},
	ed08: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return i
		})), n("ac1f"), n("466d");
		var i = function(e, t) {
			var n = navigator.userAgent.toLowerCase(),
				i = "ipad" == n.match(/ipad/i),
				a = "iphone os" == n.match(/iphone os/i),
				o = "midp" == n.match(/midp/i),
				r = "rv:1.2.3.4" == n.match(/rv:1.2.3.4/i),
				c = "ucweb" == n.match(/ucweb/i),
				l = "ucbrowser" == n.match(/ucbrowser/i),
				s = "android" == n.match(/android/i),
				u = "windows ce" == n.match(/windows ce/i),
				d = "windows mobile" == n.match(/windows mobile/i);
			return !!(i || a || o || r || c || s || u || d || l)
		}
	}
});
