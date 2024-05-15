import React from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import {useSelector} from "react-redux";

const PrivacyPolicyPage = () => {
    window.scrollTo(0, 0)
    const {isRUS} = useSelector(state => state.itemsReducer)
    return (
        <>
            <Header isSearch={false}/>
            <Container inner={
                <div className={"contract"}>
                    {isRUS?
                        <>
                            <h1>{"Политика конфиденциальности."}</h1>
                            <p>{"1. общие положения настоящая политика обработки персональных данных составлена в соответствии с требованиями федерального закона от 27.07.2006. no152-фз «о персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных."}</p>
                            <p>{"1.1. оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну."}</p>
                            <p>{"1.2. настоящая политика оператора в отношении обработки персональных данных (далее – политика) применяется ко всей информации, которую оператор может получить о посетителях веб-сайта https://onetoone.com/."}</p>
                            <p>{"2. основные понятия, используемые в политике"}</p>
                            <p>{"2.1. автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;"}</p>
                            <p>{"2.2. блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);"}</p>
                            <p>{"2.3. веб-сайт – совокупность графических и информационных материалов, а также программ для эвм и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://onetoone.com/."}</p>
                            <p>{"2.4. информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;"}</p>
                            <p>{"2.5. обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному пользователю или иному субъекту персональных данных;"}</p>
                            <p>{"2.6. обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;"}</p>
                            <p>{"2.7.оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;"}</p>
                            <p>{"2.8.персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому пользователю веб-сайта https://onetoone.com/;"}</p>
                            <p>{"2.9. пользователь – любой посетитель веб-сайта https://onetoone.com/;"}</p>
                            <p>{"2.10. предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;"}</p>
                            <p>{"2.11. распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;"}</p>
                            <p>{"2.12. трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;"}</p>
                            <p>{"2.13. уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных."}</p>
                            <p>{"3. оператор может обрабатывать следующие персональные данные пользователя"}</p>
                            <p>{"3.1. фамилия, имя, отчество;"}</p>
                            <p>{"3.2. электронный адрес;"}</p>
                            <p>{"3.3. номера телефонов;"}</p>
                            <p>{"3.4. адрес фактического места проживания или по месту пребывания;"}</p>
                            <p>{"3.5. никнейм в мессенджере https://telegram.org/;"}</p>
                            <p>{"3.6. почтовый индекс;"}</p>
                            <p>{"3.7. вышеперечисленные данные далее по тексту политики объединены общим понятием персональные данные."}</p>
                            <p>{"4. цели обработки персональных данных"}</p>
                            <p>{"4.1. цель обработки персональных данных пользователя — информирование пользователя посредством отправки электронных писем; осуществление отправки заказов пользователю по месту проживания или по месту пребывания."}</p>
                            <p>{"5. правовые основания обработки персональных данных"}</p>
                            <p>{"5.1. оператор обрабатывает персональные данные пользователя только в случае их заполнения и/или отправки пользователем самостоятельно через специальные формы, расположенные на сайте https://onetoone.com/. заполняя соответствующие формы и/или отправляя свои персональные данные оператору, пользователь выражает свое согласие с данной политикой."}</p>
                            <p>{"6. порядок сбора, хранения, передачи и других видов обработки персональных данных безопасность персональных данных, которые обрабатываются оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных."}</p>
                            <p>{"6.1. оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц."}</p>
                            <p>{"6.2. персональные данные пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства."}</p>
                            <p>{"6.3. срок обработки персональных данных является неограниченным. пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив оператору уведомление посредством отправки сообщения на аккаунт в мессенджере https://telegram.org/ - https://t.me/onet00ne."}</p>
                            <p>{"7. заключительные положения"}</p>
                            <p>{"7.1. пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к оператору с помощью сообщения на аккаунт в мессенджере https://telegram.org/ - https://t.me/onet00ne."}</p>
                            <p>{"7.2. в данном документе будут отражены любые изменения политики обработки персональных данных оператором. политика действует бессрочно до замены ее новой версией."}</p>
                            <p>{"7.3. актуальная версия политики в свободном доступе расположена в сети интернет по адресу https://onetoone.com/about."}</p>
                        </>
                        :
                        <>
                            <h1>{"Privacy policy. "}</h1>
                            <p>{"1.General provisions This Personal Data Processing Policy is in accordance with the requirements of the Federal Act of 27.07.2006. The No152-FZ «About Personal Data» defines the procedure for processing personal data and measures for ensuring the security of personal data."}</p>
                            <p>{"1.1. The operator sets its most important goal and condition for the implementation of the originality of the observance of human and civil rights and freedoms in the processing of operational data, including protection of the rights to privacy, personal and family secrets."}</p>
                            <p>{"1.2. The Operator’s Personal Data Processing Policy (hereinafter referred to as Policy) applies to all information that the Operator can obtain about https://onetoone.com/."}</p>
                            <p>{"2. The basic concepts used in Policy "}</p>
                            <p>{"2.1. Automated processing of personal data - processing of personal data by computer;"}</p>
                            <p>{"2.2. Blocking of personal data - temporary suspension of processing and personal data processing (except when processing is necessary to clarify personal data);"}</p>
                            <p>{"2.3. Website - a set of graphic and informational materials, as well as software for computers and databases that make them available on the Internet at the following address://onetoone.com/."}</p>
                            <p>{"2.4. Personal Data Information System - a set of personal data contained in databases, and providing their processing of information technologies and technical means;"}</p>
                            <p>{"2.5. Anonymization of personal data - the actions, as a result of which it is possible to determine without using additional information the belonging of personal data to a particular User or individual subject of personal data;"}</p>
                            <p>{"2.6. Processing of personal data - any action (transaction) or combination of actions (transactions) performed using or without the use of means of automation with personal data, including collection, recording, systematization, accumulation, storage, clarification (update, change), extraction, use, transfer (dissemination, provision, access), anonymization, blocking, deletion, destruction of personal data;"}</p>
                            <p>{"2.7.Operator - the state body, municipal body, legal or natural person organizing and (or) jointly with other persons processing personal data, as well as determining the healthful processing of personal data, the composition of personal data to be processed, actions (transactions) performed with personal data;"}</p>
                            <p>{"2.8.Personal data - any information related directly or indirectly to the co-determined or defined by the User of the website https://onetoone.com/;"}</p>
                            <p>{"2.9. User - any visitor to the website https://onetoone.com/;"}</p>
                            <p>{"2.10. Provision of personal data - actions aimed at disclosure of personal data to a certain person or a certain circle of persons; "}</p>
                            <p>{"2.11. Dissemination of personal data - any actions aimed at disclosure of personal data to undetermined circles (transmission of personal data) or at acquaintance with personal data of a limited number of persons, including the disclosure of personal data through mass media, the placement of technical telecommunication networks or the provision of access to personal data in any other way;"}</p>
                            <p>{"2.12. Transborder transfer of personal data - transfer of personal data to the territory of a foreign state to the authority of a foreign state, to a foreign natural or foreign legal person;"}</p>
                            <p>{"2.13. The destruction of personal data - any action resulting in the permanent destruction of personal data with the inability to further establish the content of personal data in the information system of personal data and (or) The material holders of personal data are destroyed. "}</p>
                            <p>{"3. Operator may process the following personal dataUsers "}</p>
                            <p>{"3.1. Last name, first name, patronymic;"}</p>
                            <p>{"3.2. E-mail address;"}</p>
                            <p>{"3.3. Phone numbers;"}</p>
                            <p>{"3.4. Address of the actual place of residence or the place of residence;  "}</p>
                            <p>{"3.5. Nickname in the messenger https://telegram.org/;"}</p>
                            <p>{"3.6. Zip code;"}</p>
                            <p>{"3.7. The above data is hereinafter merged into Personal Data. "}</p>
                            <p>{"4. Purposes of processing personal data "}</p>
                            <p>{"4.1. Purpose of processing personal data of the User - informing User by sending e-mail; Dispatching of funds to the User at his place of residence or place of residence."}</p>
                            <p>{"5. Legal grounds for processing personal data "}</p>
                            <p>{"5.1. The Operator processes the User’s personal data only in the event that the User completes them and/or sends them by himself via special forms located on the https://onetoone.com/ website. Filling out the corresponding forms and/or sending your personal data to the Operator, The User agrees to this Policy."}</p>
                            <p>{"6. Collection, storage, transfer and other processing of data The security of personal data processed by the Operator is ensured by the implementation of legal, organizational and technical measures necessary to fully comply with the requirements of the current legislation in the field of personal data protection."}</p>
                            <p>{"6.1. The operator shall ensure the preservation of personal data and shall take all possible measures to exclude access to personal data of unauthorized persons."}</p>
                            <p>{"6.2. Personal data of the User will never, under any circumstances, be transferred to third parties, except for cases related to the implementation of the legislation in force."}</p>
                            <p>{"6.3. Processing time for personal data is unlimited. The User may at any time withdraw his consent to the processing of personal data by notifying the Operator by sending a message to the https://telegram.org/ - https://t.me/onet00ne."}</p>
                            <p>{"7. Final provisions "}</p>
                            <p>{"7.1. The user can obtain any clarifications on the inquiries concerning the processing of his personal data by contacting To the operator using the message to the account in the message message https://telegram.org/ - https://t.me/onet00ne."}</p>
                            <p>{"7.2. This document will reflect any changes to the Operator’s processing and translation policy. The policy is valid indefinitely until it is replaced with a new version."}</p>
                            <p>{"7.3. The current version of the Free Access Policy is available on the Internet at https://onetoone.com/about."}</p>
                        </>
                    }
                </div>
            }/>
            <Footer/>
        </>
    );
};

export default PrivacyPolicyPage;