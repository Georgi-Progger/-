import React from "react";
import "./Footer.css";
import LogoType from "../imgs/logo-big.svg";
import Googleplay from "../imgs/Google Play - rus.svg";
import AppStore from "../imgs/App Store - rus.svg";
import Telephone from "../imgs/telephone.svg";
import Telegram from "../imgs/Telegram.svg";
import Viber from "../imgs/Viber.svg";
import Vk from "../imgs/VK.svg";
import WhatsApp from "../imgs/WhatsApp.svg";
import Insta from "../imgs/Instagram.svg";

const Footer : React.FC = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={LogoType}></img>
                <ul>
                    <li>
                        <a href="">
                            <p>Разместить объявление</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Отзывы</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Помощь</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>О нас</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Карьера</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Контакты</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>Помощь</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__down">
                <div className="ref__container">
                    <h2>Загрузите приложение AUTOVILL</h2>
                    <div className="ref__container-inside">
                        <div className="text-ref">
                            <p>Вы сразу узнаете, если придёт сообщение, появится новое предложение избранном или кто-то откликнется по вашему объявлению</p>
                            <div className="text-ref__buttons">
                                <a href="">
                                    <img className="google-play" src={Googleplay} alt="" />
                                </a>
                                <a href="">
                                    <img src={AppStore} alt="" />
                                </a>
                            </div>
                        </div>
                        <img src={Telephone}></img>
                    </div>
                    <div className="ref-app">
                        <p>Мы в соц.сетях</p>
                        <ul>
                            <a href="">
                                <li className="ref">
                                    <img src={Telegram} alt="" />
                                </li>
                            </a>
                            <a href="">
                                <li className="ref">
                                    <img src={Viber} alt="" />
                                </li>
                            </a>
                            <a href="">
                                <li className="ref">
                                    <img src={Vk} alt="" />
                                </li>
                            </a>
                            <a href="">
                                <li className="ref">
                                    <img src={WhatsApp} alt="" />
                                </li>
                            </a>
                            <a href="">
                                <li className="last-ref">
                                    <img src={Insta} alt="" />
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="cars-list__container">
                    <ul className="cars-list first-list">
                        <li>
                            <img></img>
                            <a><p>Новые автомобили</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Автомобили с пробегом</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Оценка автомобиля</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Автомобиль под заказ</p></a>
                        </li>
                    </ul>

                    <ul className="cars-list">
                        <li>
                            <img></img>
                            <a><p>Заказать осмотр</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Кредитование</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Бронирования</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Доставка автомобиля</p></a>
                        </li>
                    </ul>

                    <ul className="cars-list">
                        <li>
                            <img></img>
                            <a><p>Дилерам</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Осмотрщикам</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Логистам</p></a>
                        </li>
                        <li>
                            <img></img>
                            <a><p>Тех.поддержка</p></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;