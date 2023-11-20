import React, { useState } from 'react';
import "./FormCreateSet.css"


export function FormCreateSet() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // При изменении значения поля сбрасываем ошибку валидации
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Ваш код для отправки данных
      console.log('Данные отправлены:', formData);
    } else {
      // Обновляем состояние с ошибками валидации
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
  
    // Пример валидации: название набора обязательно для заполнения
    if (!data.name.trim()) {
      errors.name = 'Введите название набора';
    } else if (data.name.length < 5) {
      errors.name = 'Название набора должно содержать минимум 5 символов';
    }
  
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='div_main'>
            <div className='div_name'>
            <label>
                Название набора:
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                {errors.name && <div className="error">{errors.name}</div>}
            </label>
            </div>
            <div className='div_description'>
            <label>
                Описание:
                <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
            </label>
            
            </div>
            <div className='div_button'><input type="submit" value="Создать сет" /></div>
              
        </div>
    </form>
  );
}
