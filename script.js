;(function() {

'use strict';

function loadCss() {
var link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("integrity", "sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc");
link.setAttribute("crossorigin", "anonymous");
link.setAttribute("href", "https://use.fontawesome.com/releases/v5.14.0/css/all.css");
document.head.appendChild(link);
}

loadCss();


function addViewport() {
	let hasViewport = false;
	let listMeta = document.getElementsByTagName('meta');
	for(let i in listMeta) {
		let item = listMeta[i];
		if(item.name == 'viewport') {
			hasViewport = true;
			break;
		}
	} 
	if(!hasViewport) {
		let meta = document.createElement('meta');
		meta.name = 'viewport';
		meta.content = 'width=device-width, initial-scale=1.0';
		document.getElementsByTagName('head')[0].appendChild(meta);
	} 
}

addViewport();


localStorage.setItem('mb-ts', '');

const Add = {
    isIOS() {
        return /ip(hone|od|ad)/i.test(this.getUserAgent());
    },

    isAndroid() {
        return -1 !== this.getUserAgent().indexOf("android");
    },

    isMobile() {
        var res = this.isIOS() || this.isAndroid();
        if (!1 === res) {
            var userAgent = this.getUserAgent();
            res = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
        }
        return res;
    },

    getUserAgent() {
        return navigator.userAgent || navigator.vendor || window.opera;
    },
};

class Creator {
    constructor(settings, isMobile) {
        this.BTNS_PARAMS = {
            whatsapp: {
                text: 'WhatsApp',
                icon: ['fab', 'fa-whatsapp'],
                className: 'mb-button-whatsapp',                
            },
            telegram: {
                text: 'Telegram',
                icon: ['fab', 'fa-telegram-plane'],
                className: 'mb-button-telegram',
            },
            vkontakte: {
                text: 'VKontakte',
                icon: ['fab', 'fa-vk'],
                className: 'mb-button-vk',
            },
            facebook: {
                text: 'Facebook',
                icon: ['fab', 'fa-facebook-messenger'],
                className: 'mb-button-facebook',
            },
            email: {
                text: 'E-mail',
                icon: ['fas', 'fa-envelope-open'],
                className: 'mb-button-mail',
            },
            phone: {
                text: 'Phone',
                icon: ['fas', 'fa-phone-alt'],
                className: 'mb-button-phone',
            },
            sms: {
                text: 'SMS',
                icon: ['fas', 'fa-sms'],
                className: 'mb-button-sms',
            },
            instagram: {
                text: 'Instagram',
                icon: ['fab', 'fa-instagram'],
                className: 'mb-button-instagram',
            },
            viber: {
                text: 'Viber',
                icon: ['fab', 'fa-viber'],
                className: 'mb-button-viber',
            },
        };

        this.nodeWidget = null;
        this.nodeContainer = null;
        this.nodeContainerMain = null;
        this.nodeBtnMain = null;
        this.nodeHintMain = null;
        this.nodeBtns = {};
        this.nodePopup = null;
        this.nodePopupBtnClose = null;

        this.settings = settings;
        this.isMobile = isMobile;

        this.create();
    }

    getNodeWidget() {
        return this.nodeWidget;
    }

    getNodeContainer() {
        return this.nodeContainer;
    }

    getNodeContainerMain() {
        return this.nodeContainerMain;
    }

    getNodeBtnMain() {
        return this.nodeBtnMain;
    }

    getNodeHintMain() {
        return this.nodeHintMain;
    }

    getNodeBtns() {
        return this.nodeBtns;
    }

    getNodePopup() {
        return this.nodePopup;
    }

    getNodePopupBtnClose() {
        return this.nodePopupBtnClose;
    }

    create() {
        // this.createWidget();
        // this.createButtonMain();
        // this.createButtons();

        //my code

        if(this.getOrder().split(",").length > 1) {
            this.createWidget();
            this.createButtonMain();
            this.createButtons();
        } else {
            this.createWidget();
            this.createButtons();
        }


        // if(this.settings.show_call_to_action) {
        //     this.createHintMain();
        // }


        if(this.settings.show_call_to_action) {
            if (this.getOrder().split(',').length <= 1) {
                this.createHintButton();
            } else {
                this.createHintMain();
            }

        }
        
        if(this.settings.show_greeting) {
            this.createPopup();
        }        
    }

    createWidget() {  
        let container = document.createElement('div');
        container.classList.add('mb-container');
    
        let widget = document.createElement('div');
        widget.classList.add('mb-messengers');
        widget.append(container);

        if(this.settings.position == 'left') {
            widget.classList.add('mb-messengers-left');
        } else {
            widget.classList.add('mb-messengers-right');
        }

        this.nodeWidget = widget;
        this.nodeContainer = container;
    }

    createButtonMain() { 
        let i1 = document.createElement('i');
        i1.classList.add('far');
        // i1.classList.add('fa-comment');
        i1.classList.add('fa-comment-dots');

        let i2 = document.createElement('i');
        i2.classList.add('fas');
        i2.classList.add('fa-times');
    
        let button = document.createElement('button');
        button.classList.add('mb-button'); 
        button.append(i1);
        button.append(i2);
        button.style.backgroundColor = this.settings.button_color;
    
        let container = document.createElement('div');
        container.classList.add('mb-container-button');
        container.classList.add('mb-button-main');
        container.append(button);         
        
        if(this.settings.show_main_button_animation) {
            let div = document.createElement('div');
            div.classList.add('mb-button-main-pulse');
            container.append(div); 
        }

        this.nodeContainer.append(container);

        this.nodeContainerMain = container;
        this.nodeBtnMain = button;        
    } 

    createHintMain() {
        let p = document.createElement('p');
        p.innerHTML = this.settings.call_to_action;
    
        let container = document.createElement('div');
        container.classList.add('mb-button-hint');
        container.append(p);

        this.nodeContainerMain.append(container);

        this.nodeHintMain = container;
    }

    // my code


    createHintButton() {
        let p = document.createElement('p');
        p.innerHTML = this.settings.call_to_action;

        let container = document.createElement('div');
        container.classList.add('mb-button-hint');
        container.append(p);

        // this.nodeContainer.append(container);

        // this.nodeBtns = container;
    }
    //

    createButtons() {

        this.getOrder().split(',').forEach((item) => {

            if(this.BTNS_PARAMS[item]) {
                let params = this.BTNS_PARAMS[item];
                this.nodeBtns[item] = this.createButton(params.text, params.icon, params.className);
            }
        });

        this.appendButtons();
    }

    createButton(text, icon, className) {
        let p = document.createElement('p');
        p.innerHTML = text;
    
        let hint = document.createElement('div');
        hint.classList.add('mb-button-hint');
        hint.append(p);
    
        let i = document.createElement('i');
        icon.forEach((item) => {
            i.classList.add(item);
        });
    
        let button = document.createElement('button');
        button.classList.add('mb-button'); 
        button.append(i);
    
        let container = document.createElement('div');
        container.classList.add('mb-container-button');
        container.classList.add(className);
        container.append(button);
        container.append(hint);

        return container;
    }

    appendButtons() {
        let el;
        for(let i in this.nodeBtns) {
            let item = this.nodeBtns[i];
            if(!el) {
                this.nodeContainer.prepend(item);                
            } else {
                el.after(item);
            }
            el = item;
        }
    }

    createPopup() {
        // let i = document.createElement('i');
        // i.classList.add('fas');
        // i.classList.add('fa-times');

        let button = document.createElement('button');
        button.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>';
        button.classList.add('mb-button'); 
        button.classList.add('mb-button-close'); 
        // button.append(i);        

        let img = document.createElement('img');
        img.src = this.settings.company_logo_url;

        let p = document.createElement('p');
        p.innerHTML = this.settings.greeting_message;

        let text = document.createElement('div');
        text.classList.add('mb-popup-text');
        text.append(p);

        let row1 = document.createElement('div');
        row1.classList.add('mb-popup-row-1');
        row1.append(img);
        row1.append(text);

        let row2 = document.createElement('div');
        row2.classList.add('mb-popup-row-2');

        let el, btns = this.createSmallButtons();
        btns.forEach((item) => {
            if(!el) {
                row2.prepend(item);                
            } else {
                el.after(item);
            }
            el = item;
        });

        let container = document.createElement('div');
        container.classList.add('mb-popup');
        container.style.backgroundColor = this.settings.bg_popup;
        container.append(button);
        container.append(row1);
        container.append(row2);

        this.nodeWidget.prepend(container);

        this.nodePopup = container;
        this.nodePopupBtnClose = button;
    }

    getOrder() {
        if(this.isMobile) {
            return this.settings.order_mobile;
        } else {
            return this.settings.order_computer;
        }
    }

    createSmallButtons() {
        let btns = [];
        
        this.getOrder().split(',').forEach((item) => {
            if(this.BTNS_PARAMS[item]) {
                let params = this.BTNS_PARAMS[item];
                let btn = this.createSmallButton(params.icon, params.className);
                btns.push(btn);
            }
        });

        return btns;
    }

    createSmallButton(icon, className) {
        let i = document.createElement('i');
        icon.forEach((item) => {
            i.classList.add(item);
        });

        let button = document.createElement('button');
        button.classList.add('mb-button'); 
        button.classList.add('mb-button-small'); 
        button.classList.add(className); 
        button.append(i);

        return button;
    }
}

class Buttons {
    constructor(creator, settings) {
        this.settings = settings;
        this.nodeBtns = creator.getNodeBtns(); 
        this.duration = this.getDuration(); 
        this.timeoutId = null;      
    }

    getDuration() {
        let defaultDuration = 10;

        let duration = null;
        for(let i in this.nodeBtns) {
            duration = parseFloat(window.getComputedStyle(this.nodeBtns[i]).transitionDuration);
        }

        return duration ? duration * 1000 : defaultDuration;
    }

    show() {
        if(this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }

        for(let i in this.nodeBtns) {
            this.nodeBtns[i].style.display = 'block';
        }

        setTimeout(() => {
            for(let i in this.nodeBtns) {
                this.nodeBtns[i].style.opacity = '1';
            }
        }, 10);    
    }

    hide() {
        if(this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }

        for(let i in this.nodeBtns) {
            this.nodeBtns[i].style.opacity = '0';
        }

        this.timeoutId = setTimeout(() => {
            for(let i in this.nodeBtns) {
                this.nodeBtns[i].style.display = '';
                this.timeoutId = null;
            }
        }, this.duration);
    }
   
}

class PopupWindow {
    constructor(creator) {
        this.nodePopup = creator.getNodePopup();    
        this.nodeBtnClose = creator.getNodePopupBtnClose();    
        this.duration = this.getDuration(); 
    }

    getDuration() {
        let defaultDuration = 10;

        if(!this.nodePopup) {
            return defaultDuration;
        }

        let duration = parseFloat(window.getComputedStyle(this.nodePopup).transitionDuration);

        return duration ? duration * 1000 : defaultDuration;
    }

    getNodePopup() {
        return this.nodePopup;
    }

    getNodeBtnClose() {
        return this.nodeBtnClose;
    }

    show() {        
        this.nodePopup.style.display = 'block';
        localStorage.setItem('mb-ts', (new Date()).getTime());
        setTimeout(() => {
            this.nodePopup.style.opacity = '1';  
        }, 10);
    }

    hide() {
        this.nodePopup.style.opacity = '0';
        setTimeout(() => {
            this.nodePopup.style.display = '';
        }, this.duration);
    }

    getTs() {
        return +localStorage.getItem('mb-ts');
    }

    resetTs() {
        localStorage.setItem('mb-ts', '');
    }

    isPopup(node) {
        return node.closest('.mb-popup')  ? true : false;
    }
}

class MainButton {
    constructor(creator, displayTimeHint) {
        this.DELAY_HINT = 5010;
        this.enabled = true;
        this.timeoutHintShow = null;
        this.timeoutHintHide = null;
        this.nodeBtn = creator.getNodeBtnMain();
        this.nodeHint = creator.getNodeHintMain();       
        this.durationHint = this.getDurationHint();
        this.displayTimeHint = displayTimeHint;
        
        this.showHint();
    }
    
    getNodeBtn() {
        return this.nodeBtn;
    }

    getNodeHint() {
        return this.nodeHint;
    }

    getDurationHint() {
        let defaultDuration = 10;

        if(!this.nodeHint) {
            return defaultDuration;
        }

        let durationHint = parseFloat(window.getComputedStyle(this.nodeHint).transitionDuration);

        return durationHint ? durationHint * 1000 : defaultDuration;
    }

    showHint() {
        if(!this.nodeHint) {
            return;
        }

        this.timeoutHintShow = setTimeout(() => {
            if(!this.isPressed()) {
                this.nodeHint.style.display = 'block'; 
                this.timeoutHintShow = null;
                setTimeout(() => {
                    this.nodeHint.style.opacity = '1';                    
                }, 10);   
                
                if(this.timeoutHintHide) {
                    clearTimeout(this.timeoutHintShow);
                }

                if(this.displayTimeHint) {
                    this.timeoutHintHide = setTimeout(() => {
                        this.hideHint();
                    }, this.displayTimeHint * 1000);
                }
            }
        }, this.DELAY_HINT);   
    }

    hideHint() {
        if(!this.nodeHint) {
            return;
        }
        
        if(this.timeoutHintShow) {
            clearTimeout(this.timeoutHintShow);
            this.timeoutHintShow = null;
        } 

        if(this.timeoutHintHide) {
            clearTimeout(this.timeoutHintHide);
            this.timeoutHintHide = null;
        } 
        
        this.nodeHint.style.opacity = '0';
        setTimeout(() => {
            this.nodeHint.style.display = 'none';
        }, this.durationHint); 
    }

    isPressed() {
        return this.nodeBtn.classList.contains('mb-pressed');
    }

    isButton(node) {
        return node.closest('.mb-button-main')  ? true : false;
    }

    press() {
        this.nodeBtn.classList.add('mb-pressed');
        this.hideHint();
        this.enabled = false;
    }

    unpress() {
        this.nodeBtn.classList.remove('mb-pressed');
        this.showHint();
        this.enabled = true;
    }
    
    enable() {
        if(!this.isPressed()) {
            this.enabled = true;
        }
    }

    isEnabled() {
        return this.enabled;
    }
}

class Widget {
    constructor(settings, isMobile) {
        if(!settings.show_widget) {
            return;
        }

        this.init = this.init.bind(this);
        this.mouseoverMain = this.mouseoverMain.bind(this);
        this.mouseoutMain = this.mouseoutMain.bind(this);
        this.clickMain = this.clickMain.bind(this);
        this.clickDocument = this.clickDocument.bind(this);                
        this.clickPopupClose = this.clickPopupClose.bind(this);
        this.clickVk = this.clickVk.bind(this);
        this.clickSms = this.clickSms.bind(this);
        this.clickFacebook = this.clickFacebook.bind(this);
        this.clickWhatsapp = this.clickWhatsapp.bind(this);
        this.clickTelegram = this.clickTelegram.bind(this);
        this.clickMail = this.clickMail.bind(this);
        this.clickPhone = this.clickPhone.bind(this);
        this.clickInstagram = this.clickInstagram.bind(this);
        this.clickViber = this.clickViber.bind(this);

        this.WIDTH_MOBILE = 520;
        this.POPUP_DELAY = 5000;		

        this.nodeWidget = null;
        this.btnMain = null;
        this.btns = null;
        this.popup = null;
        this.popupBtnClose = null;
        this.hasPopupShowTimer = false;
        this.hidePopupTimeoutId = false;
        
        this.settings = settings;
        this.isMobile = isMobile;
		
		this.displayTimePopup = this.settings.display_time_greeting;

        this.init();
    }

    // my code
    // set animation

    setAnimation(animationType) {

        if (animationType === "default" || !animationType) {
            return
        }

        // отключаем анимацию по умолчанию
        let animDefault = document.querySelector('.mb-button-main-pulse');
        animDefault.classList.remove('mb-button-main-pulse');

        // задаем тип анимации, указанный в настройках
        let elem = document.querySelector('.mb-button-main .mb-button');
        elem.classList.add(animationType);
        return false;

    }

    init() { 
        let creator = new Creator(this.settings, this.isMobile);

        this.nodeWidget = creator.getNodeWidget();
        document.body.append(this.nodeWidget);

        this.btnMain = new MainButton(creator, this.settings.display_time_hint);
        this.btns = new Buttons(creator, this.settings);

        // my code
        if(creator.getOrder().split(',').length <= 1) {
            this.btns.show();
            // this.btnMain.style.display = 'none';
            this.setBtnsActions();
        }
        //

        if (creator.getOrder().split(',').length > 1) {
        if(this.settings.show_greeting) {
            this.popup = new PopupWindow(creator);
            this.showPopup();
            this.popup.getNodeBtnClose().addEventListener('click', this.clickPopupClose);
        }

        // document.addEventListener('click', this.clickDocument);
        // this.btnMain.getNodeBtn().addEventListener('click', this.clickMain);

            document.addEventListener('click', this.clickDocument);
            this.btnMain.getNodeBtn().addEventListener('click', this.clickMain);

            let nodeHint = this.btnMain.getNodeHint();
            if(nodeHint) {
                this.btnMain.getNodeHint().addEventListener('click', this.clickMain);
            }

            if(!this.isMobile) {
                this.btnMain.getNodeBtn().addEventListener('mouseenter', this.mouseoverMain);
                this.btnMain.getNodeBtn().addEventListener('mouseleave', this.mouseoutMain);

                if(nodeHint) {
                    this.btnMain.getNodeHint().addEventListener('mouseenter', this.mouseoverMain);
                    this.btnMain.getNodeHint().addEventListener('mouseleave', this.mouseoutMain);
                }
            }

        }

        this.setBtnsActions();
        // my code
        this.setAnimation(this.settings.animation_type);
        //
    }

    clickMain(e) {
        if(this.btnMain.isPressed()) {
            this.btnMain.unpress();                        
            this.btns.hide();
            this.showPopup();
        } else {
            this.btnMain.press(); 
            this.hidePopup();           
            this.btns.show();
            // this.hidePopup();
            this.setBtnsActions();
        }
    }

    mouseoverMain(e) {
        if(this.btnMain.isEnabled() && !this.btnMain.isPressed()) {
            this.btnMain.press();
            this.hidePopup();            
            this.btns.show();
        }
    }
    
    mouseoutMain(e) {        
        this.btnMain.enable();        
    }

    clickDocument(e) {
        if(!this.btnMain.isButton(e.target) && this.btnMain.isPressed()) {
            this.btnMain.unpress();
            this.btns.hide();
            this.showPopup();
        } else if(document.documentElement.clientWidth <= this.WIDTH_MOBILE && !this.popup.isPopup(e.target)) {
            this.hidePopup();
            this.btnMain.showHint();
        }
    } 

    showPopup() {
        if(!this.popup || this.hasPopupShowTimer) {
            return;
        }		

        let delay = this.POPUP_DELAY;
        let oldTs = this.popup.getTs();   

        if(oldTs) {
            let currentTs = (new Date()).getTime();
            let diff = (oldTs + 24 * 60 * 60 * 1000) - currentTs;
            if(diff > delay) {
                delay = diff;
            }
        }

        this.hasPopupShowTimer = true;
        setTimeout(() => {
            this.hasPopupShowTimer = false;
                    
            if(!this.btnMain.isPressed()) {
                this.popup.show();
                this.btnMain.hideHint();
				
				if(this.displayTimePopup) {
					this.hidePopupTimeoutId = setTimeout(() => {	
						this.hidePopup();
						this.btnMain.showHint();
					}, this.displayTimePopup * 1000);
				}
            } else {
                this.popup.resetTs();
            }        
        }, delay);
    }

    hidePopup() {
        if(!this.popup) {
            return;
        }
		
		if(this.hidePopupTimeoutId) {
			clearTimeout(this.hidePopupTimeoutId);
			this.hidePopupTimeoutId = null;
		}

        this.popup.hide();
    }

    clickPopupClose() {
        this.hidePopup();
        this.btnMain.showHint();
    }
    
    setBtnsActions() {
        this.nodeWidget.querySelectorAll('button.mb-button-vk, .mb-button-vk button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickVk);
        });

        this.nodeWidget.querySelectorAll('button.mb-button-facebook, .mb-button-facebook button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickFacebook);
        });

        this.nodeWidget.querySelectorAll('button.mb-button-whatsapp, .mb-button-whatsapp button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickWhatsapp);
        });

        this.nodeWidget.querySelectorAll('button.mb-button-telegram, .mb-button-telegram button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickTelegram);
        });
        
        this.nodeWidget.querySelectorAll('button.mb-button-mail, .mb-button-mail button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickMail);
        });
        
        this.nodeWidget.querySelectorAll('button.mb-button-phone, .mb-button-phone button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickPhone);
        });

        this.nodeWidget.querySelectorAll('button.mb-button-sms, .mb-button-sms button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickSms);
        });

        this.nodeWidget.querySelectorAll('button.mb-button-instagram, .mb-button-instagram button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickInstagram);
        });

        this.nodeWidget.querySelectorAll('button.mb-button-viber, .mb-button-viber button.mb-button').forEach((item) => {
            item.addEventListener('click', this.clickViber);
        });
    }

    clickWhatsapp(e) {
        if(!this.settings.whatsapp) {
            return;
        }

        let id = this.settings.whatsapp;
        window.open('https://wa.me/' + id);
    }

    clickVk(e) {
        if(!this.settings.vkontakte) {
            return;
        }

        let id = this.settings.vkontakte;
        window.open('https://vk.me/' + id);
    }

    clickFacebook(e) {
        if(!this.settings.facebook) {
            return;
        }

        let id = this.settings.facebook;
        window.open('http://m.me/' + id);
    }

    clickTelegram(e) {
        if(!this.settings.telegram) {
            return;
        }

        let id = this.settings.telegram;
        window.open('https://t.me/' + id);
    }

    clickMail(e) {
        if(!this.settings.email) {
            return;
        }

        let id = this.settings.email;
        window.open('mailto:' + id);
    }

    clickPhone(e) {
        if(!this.settings.phone) {
            return;
        }

        let id = this.settings.phone;
        window.open('tel:' + id);
    }

    clickSms(e) {
        if(!this.settings.sms) {
            return;
        }

        let id = this.settings.sms;
        let text = encodeURIComponent(this.settings.user_message);
        window.open('sms://' + id + '/?body=' + text);
    }

    clickInstagram(e) {
        if(!this.settings.instagram) {
            return;
        }

        let id = this.settings.instagram;
		window.open('https://www.instagram.com/' + id + '/');
    }

    clickViber(e) {
        if(!this.settings.viber) {
            return;
        }

        let id = this.settings.viber;
        if(this.isMobile) {
            window.open('viber://add?number=' + id);
        } else {
            window.open('viber://chat?number=' + id);
        }
    }
}

    new Widget({"order_computer":"whatsapp,vkontakte","order_mobile":"whatsapp","show_greeting":true,"company_logo_url":"https://d2j6dbq0eux0bg.cloudfront.net/images/191403/23951996.jpg","greeting_message":"greeting_message","display_time_greeting":6,"button_color":"#129BF4","show_call_to_action":true,"call_to_action":"call_to_action","show_main_button_animation":true,"position":"right","bg_popup":"#fff","user_message":"user_message,","countryCode":"RU","facebook":"","instagram":"","vkontakte":"","ui":{"whatsapp":"+7 (911) 123-45-67","facebook":"","instagram":"","vkontakte":"","telegram":""},"whatsapp":"79111234567","telegram":"","show_widget":true, "animation_type":"default"}, Add.isMobile());

})();