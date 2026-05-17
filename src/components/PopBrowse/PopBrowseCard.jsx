import {
    SBtnBg,
    SButtonBrd,
    SCategoriesTheme,
    SFormBrowseArea,
    SFormBrowseBlock,
    SLabel,
    SPopBrowseBtnBrowse,
    SPopBrowseBtnGroup, SPopBrowseContent,
    SPopBrowseForm,
    SPopBrowseStatus,
    SPopBrowseTitle,
    SPopBrowseTopBlock,
    SPopBrowseWrapper,
    SStatus,
    SStatusThemes,
    SThemeDown
} from "./PopBrowse.styled.js";
import PopCalendar from "../PopCalendar/PopCalendar.jsx";
import {useNavigate} from "react-router-dom";

function PopBrowseCard({word}) {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    }

    return (
        <SPopBrowseContent>
            <SPopBrowseTopBlock>
                <SPopBrowseTitle>{word?.title}</SPopBrowseTitle>
                <SCategoriesTheme $topicColor={word.theme}>
                    <p>{word?.theme}</p>
                </SCategoriesTheme>
            </SPopBrowseTopBlock>
            <SPopBrowseStatus>
                <SStatus>Статус</SStatus>
                <SStatusThemes>
                    <div className="status__theme _hide">
                        <p>Без статуса</p>
                    </div>
                    <div className="status__theme _gray">
                        <p className="_gray">{word?.status}</p>
                    </div>
                    <div className="status__theme _hide">
                        <p>В работе</p>
                    </div>
                    <div className="status__theme _hide">
                        <p>Тестирование</p>
                    </div>
                    <div className="status__theme _hide">
                        <p>Готово</p>
                    </div>
                </SStatusThemes>
            </SPopBrowseStatus>
            <SPopBrowseWrapper>
                <SPopBrowseForm>
                    <SFormBrowseBlock>
                        <SLabel>Описание задачи</SLabel>
                        <SFormBrowseArea
                            name="text"
                            id="textArea01"
                            readOnly
                            placeholder="Введите описание задачи..."
                        >
                        </SFormBrowseArea>
                    </SFormBrowseBlock>
                </SPopBrowseForm>

                <PopCalendar/>

            </SPopBrowseWrapper>
            <SThemeDown>
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                </div>
            </SThemeDown>
            <SPopBrowseBtnBrowse>
                <SPopBrowseBtnGroup>
                    <SButtonBrd>
                        Редактировать задачу
                    </SButtonBrd>
                    <SButtonBrd>
                        Удалить задачу
                    </SButtonBrd>
                </SPopBrowseBtnGroup>
                <SBtnBg onClick={handleClose}>
                    Закрыть
                </SBtnBg>
            </SPopBrowseBtnBrowse>
            <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                    <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                    <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                    <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить
                        задачу</a></button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
            </div>
        </SPopBrowseContent>
    )
}

export default PopBrowseCard;