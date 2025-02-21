import { useCallback } from 'react'
import { useTranslation } from 'react-google-multi-lang'
import './style.scss'

const LanguageSelector = () => {
    const { setLanguage } = useTranslation()

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(`onChange function triggered: ${e.target.value}`)
        setLanguage(e.target.value)
    }, [setLanguage])
    return (
        <div className="custom-select">
            <label htmlFor='select-option'></label>
            <div className="select-body">
                <select id='select-option' onChange={handleOnChange}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="pt">Portuguese</option>
                </select>
                <div className="select-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}

export default LanguageSelector
