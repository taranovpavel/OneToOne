import React from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import {useSelector} from "react-redux";

const OfferContractPage = () => {
    window.scrollTo(0, 0)
    const {isRUS} = useSelector(state => state.itemsReducer)
    return (
        <>
            <Header isSearch={false}/>
            <Container inner={
                <div className={"contract"}>
                    {isRUS ?
                        <>
                            <h1>{"Договор оферты"}</h1>
                            <p>{"1. Основные понятия и определения:"}</p>
                            <p>{"1.1. Публичная оферта – публичное предложение Продавца, адресованное неопределенному кругу лиц, заключить с Продавцом договор купли-продажи товаров дистанционным способом (далее - «Договор»);"}</p>
                            <p>{"1.2. Покупатель – физическое лицо, использующее программные средства просмотра контента в сети Интернет, принимающее условия настоящего Договора "}</p>
                            <p>{"1.3. Товар – изделия, предлагаемые к продаже на сайте https://onetoone.com/;"}</p>
                            <p>{"1.4. Интернет-магазин – сайт в сети Интернет, расположенный по адресу https://onetoone.com/, на котором любой Покупатель может ознакомиться с представленными Товарами и их ценами, выбрать определённый Товар, сформировать и отправить Заказ Продавцу;"}</p>
                            <p>{"1.5. Заказ – оформленный запрос Покупателя на приобретение, оплату и доставку Товара, выбранного на сайте https://onetoone.com/, отправленный Продавцу посредством сети Интернет;"}</p>
                            <p>{"1.6. Сайт – сайт Продавца в сети Интернет, расположенный по адресу https://onetoone.com/."}</p>
                            <p>{"2. Общие положения"}</p>
                            <p>{"2.1. Заказывая Товар на сайте https://onetoone.com/ Покупатель выражает свое согласие с вышеизложенными условиями продажи Товара и принимает их."}</p>
                            <p>{"2.2. Настоящие условия продажи Товара, а также информация о Товаре, представленная на сайте https://onetoone.com/, являются публичной офертой в соответствии со ст. 435 и п.2 ст. 437 Гражданского кодекса Российской Федерации."}</p>
                            <p>{"2.3. Продавец имеет право вносить изменения и дополнения в настоящий Договор, размещенный по адресу https://onetoone.com/, при этом такие изменения вступают в силу с даты размещения на сайте Продавца. Покупатель принимает на себя обязательства отслеживать изменения и дополнения, внесенные в настоящий Договор. Самой актуальной версией Договора является версия, размещенная на сайте Продавца."}</p>
                            <p>{"2.4. Нажимая кнопку «Заказать» при формировании Заказа на сайте, Пользователь подтверждает свое согласие с условиями продажи Товара, изложенными в настоящем Договоре,и одновременно предоставляет согласие на обработку персональных данных, полученных при оформлении Заказа."}</p>
                            <p>{"2.5. Настоящий Договор считается заключенным с момента получения Продавцом сообщения о намерении Покупателя приобрести товар , нажав кнопку «Оформить заказ»."}</p>
                            <p>{"3. Предмет договора"}</p>
                            <p>{"3.1. Продавец предоставляет возможность любому физическому лицу приобретать для личных, семейных или иных нужд, не связанных с осуществлением Покупателем Предпринимательской деятельности, Товары, представленные на сайте https://onetoone.com/."}</p>
                            <p>{"3.2. Данный Договор распространяется на все виды Товаров, представленные на сайте https://onetoone.com/, пока такие предложения с описанием присутствуют в каталоге сайта."}</p>
                            <p>{"4. Порядок оформления заказа"}</p>
                            <p>{"4.1. Оформление Заказа в Интернет-магазине осуществляется Покупателем самостоятельно. При оформлении Заказа Покупатель заполняет электронную форму Заказа Товара и отправляет сформированный Заказ Продавцу посредством системы сайта."}</p>
                            <p>{"4.2. При регистрации на сайте Интернет-магазина Покупатель обязуется предоставить следующую регистрационную информацию:"}</p>
                            <p>{"4.2.1. фамилия, имя, отчество Покупателя или указанного им лица (получателя);"}</p>
                            <p>{"4.2.2. адрес, по которому следует доставить Товар (если доставка до адреса Покупателя);"}</p>
                            <p>{"4.2.3. ссылка на аккаунт в мессенджер https://telegram.org/;"}</p>
                            <p>{"4.2.4. адрес электронной почты;"}</p>
                            <p>{"4.2.5. почтовый индекс;"}</p>
                            <p>{"4.2.6. контактный телефон."}</p>
                            <p>{"4.3. Наименование, количество, ассортимент, цена выбранного Покупателем Товара указываются в корзине Покупателя на сайте Интернет-магазина."}</p>
                            <p>{"4.4. Продавец не несет ответственности за содержание и достоверность информации, предоставленной Покупателем при оформлении Заказа."}</p>
                            <p>{"4.5. Покупатель несет ответственность за достоверность предоставленной информации при оформлении Заказа."}</p>
                            <p>{"4.6. Описания и характеристики Товара в Интернет-магазине содержат основные сведения о Товаре."}</p>
                            <p>{"4.7. По всем возникающим вопросам, касающимся свойств и характеристик Товара, Покупатель может обратиться к Продавцу, посредством отправки сообщения в мессенджер https://telegram.org/ - https://t.me/onet00ne."}</p>
                            <p>{"4.8. Фотографии и макеты Товара, представленные на сайте https://onetoone.com/, созданы в условиях специального освещения с использованием профессионального оборудования, либо откорректированы в программе Photoshop, являются простыми иллюстрациями и могут отличаться от фактического внешнего вида Товара при иных условиях наблюдения."}</p>
                            <p>{"4.9. Цена Товара указана на сайте https://onetoone.com/ рядом с изображением Товара."}</p>
                            <p>{"4.10. Доставка Товара осуществляется по согласованию Покупателя и Продавца. Срок доставки Товара Покупателю состоит из срока обработки заказа и срока доставки."}</p>
                            <p>{"4.11.Оплата полной стоимости доставки осуществляется за счет Покупателя в случае если доставка осуществляется не в страны Содружества Независимых Государств. \n"}</p>
                            <p>{"4.12.Продажа Товара осуществляется путем 100% (Сто процентов) предоплатыстоимости Товара."}</p>
                            <p>{"4.13.По оформлению заказа Покупателю предоставляется информация посредством отправки сообщения на аккаунт в мессенджере https://telegram.org/, указанный Покупателем, далее возможно подключение Услуги оповещения на сайте Почты России.  Срок доставки Товара может быть изменен Продавцом, о чем Покупатель уведомляется путем отправки сообщения на аккаунт в мессенджере https://telegram.org/, указанного Покупателем."}</p>
                            <p>{"4.14. Покупатель получает уведомление о состоянии заказа посредством отправки сообщения на аккаунт в мессенджере https://telegram.org/, указанного Покупателем."}</p>
                            <p>{"5. Стоимость Товара и способы оплаты"}</p>
                            <p>{"5.1. Цена на Товар, представленный на сайте https://onetoone.com/, указана в рублях и долларах США."}</p>
                            <p>{"5.2. Цена Товара на сайте https://onetoone.com/ может быть изменена Продавцом в одностороннем порядке. При этом цена на заказанный Покупателем Товар изменению не подлежит, кроме случаев, указанных в п. 5.3."}</p>
                            <p>{"5.3. Продавец вправе предоставлять скидки на цену Товара, согласно действующим в Интернет-магазине в момент оформления Заказа торговым акциям. В случае предоставления Покупателем при оформлении Заказа недостоверных (ошибочных) данных, Продавец вправе при выдаче и оплате Товара произвести перерасчет суммы предоставленной скидки с цены Товара."}</p>
                            <p>{"5.4. Оплата Товара производится Банковской картой после оформлении Заказа на сайте."}</p>
                            <p>{"5.5. Оплата доставки осуществляется Покупателем банковской картой после оформлении Заказа на сайте. "}</p>
                            <p>{"5.6. В случае отказа Покупателя от Товара, при возврате Покупателю суммы полной оплаты, внесенной Покупателем, банковские и иные комиссии, уплаченные Покупателем в этой связи, Продавцом не компенсируются."}</p>
                            <p>{"6. Гарантия, отмена Заказа, возврат Товара и предоплаты"}</p>
                            <p>{"6.1. Гарантийный срок на Товара равен 3 (Трём) днями исчисляется с момента передачи Товара Покупателю."}</p>
                            <p>{"6.2. Гарантия распространяется только на производственный брак и не распространяется на дефекты, образовавшиеся в результате: механических повреждений (царапин, разрывов, потертостей и т.д.); воздействия экстремальных температур, растворителей, кислот, воды; неправильного использования (эксплуатации); естественного износа."}</p>
                            <p>{"6.3. Порядок отмены Заказа:"}</p>
                            <p>{"6.3.1. Для мгновенной отмены Заказа Покупателю необходимо связаться с Продавцом в течение 6 (Шести) часов посредством отправки сообщения в мессенджер https://telegram.org/ - https://t.me/onet00ne."}</p>
                            <p>{"6.3.2. Договор купли-продажи считается расторгнутым автоматически, в случае непоступления полной оплаты стоимости Заказа."}</p>
                            <p>{"6.4. Товар надлежащего качества, полученный Покупателем, обмену и возврату не подлежит."}</p>
                            <p>{"7. Ответственность"}</p>
                            <p>{"7.1. За неисполнение или ненадлежащее исполнение своих обязательств по Договору Стороны несут ответственность в соответствии с действующим законодательством РФ."}</p>
                            <p>{"7.2. Совокупная ответственность Продавца по настоящему Договору ограничивается суммой платежа, уплаченного Покупателем по Договору."}</p>
                            <p>{"7.3. Не вступая в противоречие с указанным выше, Продавец освобождается от ответственности за нарушение условий Договора, если такое нарушение вызвано действием обстоятельств непреодолимой силы (форс-мажор) включая: действия органов государственной̆ власти (в т.ч. принятие правовых актов), пожар, наводнение, землетрясение, другие стихийные бедствия, отсутствие электроэнергии и/или сбои работы компьютерной сети, забастовки, гражданские волнения, беспорядки, любые иные обстоятельства, не ограничиваясь перечисленным, которые могут повлиять на исполнение Продавцом Договора."}</p>
                            <p>{"8. Прочие условия"}</p>
                            <p>{"8.1. Покупатель обязуется дать свое согласие на обработку персональных данных путем подтверждения Положения о политике конфиденциальности персональных данных, размещенной на сайте https://onetoone.com/."}</p>
                            <p>{"8.2. Сайт https://onetoone.com/ и предоставляемые сервисы могут временно частично или полностью недоступны по причине проведения профилактических или иных работ или по любым другим причинам технического характера."}</p>
                            <p>{"8.3. В случае возникновения вопросов и претензий со стороны Покупателя он вправе обратиться к Продавцу посредством отправки сообщения в мессенджер https://telegram.org/ - https://t.me/onet00ne. Все Возникающее споры стороны будут стараться решить путем переговоров, при недостижении соглашения, соответствующий спор подлежит разрешению в суде."}</p>
                        </>
                        :
                        <>
                            <h1>{"Offer contract"}</h1>
                            <p>{"1. Basic concepts and definitions:"}</p>
                            <p>{"1.1. Public offer - a public offer of the Seller, addressed to the specified circle of persons, to conclude with the Seller a contract of sale of goods remotely (hereinafter - «Contract»);"}</p>
                            <p>{"1.2. The Buyer is a natural person who uses Internet content viewers, accepts the terms of this Agreement and expresses the desire to buy the goods information about which is placed on the website https:///onetoone.com/;"}</p>
                            <p>{"1.3. Product - products offered for sale on the website https://onetoone.com/;"}</p>
                            <p>{"1.4. Online store - a site in the Internet, located at the address https://onetoone.com/ on which any Buyer can get acquainted with the presented Goods and their prices, select a certain Goods, form and send the Order to the Seller;"}</p>
                            <p>{"1.5. Order - completed Buyer’s request for purchase, payment and rate of Goods selected on https://onetoone.com/ site, sent To the seller via the Internet;"}</p>
                            <p>{"1.6. Site - Seller’s site in the Internet, located at https://onetoone.com/."}</p>
                            <p>{"2. General regulations "}</p>
                            <p>{"2.1. When ordering the Goods on the website https://onetoone.com/ The Buyer expresses his agreement with the above terms of sale of the Goods and accepts them. "}</p>
                            <p>{"2.2. The present terms of sale of the Goods, as well as the information about the Goods provided on the site https://onetoone.com/ , are a public offer in accordance with Article. 435 and art. 437, para. 2, of the Civil Code of the Russian Federation.  "}</p>
                            <p>{"2.3. The Seller shall have the right to make amendments and additions to this Contract, placed at https://onetoone.com/ and such changes shall take effect from the date of posting on the Seller’s website. The Buyer undertakes to monitor the changes and additions made to this Contract. The most up-to-date version of the Treaty is the version posted on the websiteSeller."}</p>
                            <p>{"2.4. By pressing the button «Order» at the formation of the Order on the site, the User confirms his agreement with the terms of sale of the Goods set out in this The Agreement,, and at the same time gives consent to the processing of personal data received during the execution of the Order. "}</p>
                            <p>{"2.5. This Agreement is considered to be concluded from the moment of receipt by the Seller of the message about the Buyer’s intention to acquire, by pressing the «Place an Order» button. "}</p>
                            <p>{"3. Subject matter"}</p>
                            <p>{"3.1. Seller provides an opportunity for any natural person to acquire for personal, family or other needs unrelated to the implementation of the Buyer Business, Products presented on the site https://onetoone.com/. "}</p>
                            <p>{"3.2. This Agreement applies to all types of Goods presented on the website:/onetoone.com/ while such offers with description are present inthe website directory. "}</p>
                            <p>{"4. Order Order Procedure "}</p>
                            <p>{"4.1. Order Execution in the online store is carried out by the Buyer independently. When placing an Order the Buyer fills the electronic formOrder of Goods and sends the formed Order to the Seller via the system site. "}</p>
                            <p>{"4.2. Upon registration on the website of the Online Store, the Buyer undertakes to provide the following registration information:"}</p>
                            <p>{"4.2.1. surname, first name, patronymic of the Buyer or the person named by him (recipient);"}</p>
                            <p>{"4.2.2. address by which the Goods should be delivered (if delivery to address Buyer);"}</p>
                            <p>{"4.2.3. link to the account in the messenger https://telegram.org/;"}</p>
                            <p>{"4.2.4. e-mail address;"}</p>
                            <p>{"4.2.5. zip code;"}</p>
                            <p>{"4.2.6. contact telephone. "}</p>
                            <p>{"4.3. Name, quantity, assortment, price of the chosen Buyer Commodity shall be listed in the Buyer’s basket on the website of the Internet Shop."}</p>
                            <p>{"4.4. The Seller is not responsible for the content and accuracy of the information provided by the Buyer at the execution of the Order. "}</p>
                            <p>{"4.5. The Buyer is responsible for the accuracy of the information provided during the execution of the Order. "}</p>
                            <p>{"4.6. The descriptions and characteristics of the Goods in the online store contain basic information about the Goods."}</p>
                            <p>{"4.7. On all emerging issues concerning properties and characteristicsGoods, the Buyer can turn to the Seller, by sending and contacting the messenger https://telegram.org/ - https://t.me/onet00ne. "}</p>
                            <p>{"4.8. Photos and mock-ups of the Goods presented on the website https://onetoone.com/, created under conditions ofspecial lighting with the use ofprofessional equipment, orcorrected inthe frame ofphotoshop, are simple illustrations and may differ from the actual appearance of the Goods under other conditions of observation. "}</p>
                            <p>{"4.9. The price of the Goods is indicated on the site https://onetoone.com/ next to the image of the Goods."}</p>
                            <p>{"4.10. Delivery of the Goods is carried out by agreement of the Buyer and the Seller. Delivery timeGoods Buyer consists of the time of order processing and delivery time. "}</p>
                            <p>{"4.11.Payment of the full cost of delivery is made at the expense of the Buyer in case the delivery is not carried out in the countries of the Commonwealth of Independent States. "}</p>
                            <p>{"4.12.The Goods are sold by 100% (One hundred pecent) prepayability of the Goods."}</p>
                            <p>{"4.13.Upon placing an order, the Buyer is provided with information by means of a message to the account in the message message https://telegram.org/ specified by the Buyer, it is possible to connect the Notification Service on the Russian Mail site.  The time of delivery of the Goods may be changed by the Seller, of whichThe Buyer is notified by sending a message to the Buyer’s account in the https://telegram.org/ messenger. "}</p>
                            <p>{"4.14. The buyer receives notification about the order status by sending and communicating to the account in the message https://telegram.org/ specified by the Buyer. "}</p>
                            <p>{"5. The cost of the Goods and methods of payment "}</p>
                            <p>{"5.1. The price of the Goods presented on the site https://onetoone.com/ is indicated on the bases and USD. "}</p>
                            <p>{"5.2. The price of the Goods on the website https://onetoone.com/ can be changed By the seller unilaterally. In this case, the price of the ordered BuyerThe goods shall not be subject to change except as specified in para. 5.3."}</p>
                            <p>{"5.3. The Seller shall be entitled to offer discounts on the price of the Goods, as applicable in Online store at the time of placing an order for trading shares. In case the Buyer provides unreliable (erroneous) data when placing an Order, the Seller has the right to recalculate the amount of the discount from the price of the Goods when issuing and paying for the Goods. "}</p>
                            <p>{"5.4. Payment of the Goods is made by the Bank card after the Order on the site."}</p>
                            <p>{"5.5. Payment for delivery is made by the Buyer bank card after the Order on the site.  "}</p>
                            <p>{"5.6. In case of the Buyer’s refusal from the Goods, when the Buyer returns the amount of the full payment made by the Buyer, bank and other commissions paid by the Buyer in this regard, the Seller shall not be compensated. "}</p>
                            <p>{"6. Warranty, Cancellation of Order, Return of Goods and Advance Payment "}</p>
                            <p>{"6.1. The warranty period for the Goods is equal to 3 (three) days from the moment of delivery of the Goods to the Buyer. "}</p>
                            <p>{"6.2. The warranty applies only to industrial defects and shall not extend to defects resulting from: mechanical damage (scratches, ruptures, abrasions, etc.); exposure to extremalture, solvents, acids, water; Improper use(operation); normal wear and tear."}</p>
                            <p>{"6.3. Order cancellation procedure:"}</p>
                            <p>{"6.3.1. To cancel an Order immediately, the Buyer must contact the Seller within 6 (Six) hours by sending a message to the https://telegram.org/ - https://t.me/onet00ne. "}</p>
                            <p>{"6.3.2. The contract of sale is automatically terminated in the event of failure to pay in full the cost of the Order. "}</p>
                            <p>{"6.4. Goods of appropriate quality received by the Buyer, exchange and return is not. "}</p>
                            <p>{"7. Responsibility "}</p>
                            <p>{"7.1. Failure or improper performance of its obligations under the Treaty The parties bear responsibility in accordance with the current legislation of the Russian Federation. "}</p>
                            <p>{"7.2. The cumulative liability of the Seller in this Contract is limited by the amount of payment paid by the Buyer under the Contract. "}</p>
                            <p>{"7.3. Without prejudice to the foregoing, the Seller shall be released from liability for breach of the terms of the Contract if such breach is caused by force majeure (force majeure) circumstances, including: acts of public authorities (incl. adoption of legal acts), fire, flood, earthquake, other natural disasters, lack of electricity and/or computer network failures, strikes, civil disturbances, disturbances, any circumstances, not limited to those listed above, that may affect the Seller of the Contract. "}</p>
                            <p>{"8. Other conditions"}</p>
                            <p>{"8.1. The Buyer undertakes to give its consent to the processing of personal data by means of a confirmation of the Privacy Policy Policy posted on the website https://onetoone.com/"}</p>
                            <p>{"8.2. The Website https://onetoone.com/ and the services provided may be temporarily or completely unavailable due to preventive or other work or any other technical reasons. "}</p>
                            <p>{"8.3. In case of questions and claims from the Buyer, it is right to contact the Seller by sending a message to the messenger https:///telegram.org/ - https://t.me/onet00ne. All the parties will try to settle the dispute through negotiations, accept the agreement, the relevant dispute is to be settled in court."}</p>
                        </>
                    }
                </div>
            }/>
            <Footer/>
        </>
    );
};

export default OfferContractPage;