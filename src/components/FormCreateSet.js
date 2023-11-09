export function FormCreateSet(){
    return(
        <form>
            <label>
                название набора:
                <input type="text" name="name"/>
            </label>
            <label>
                описание:
                <textarea name="discription"/>
            </label>
            <input type="submit" value="Создать сет"/>
        </form>
    )
}