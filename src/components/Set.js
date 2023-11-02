import React, { useState } from 'react';
import { Card } from './Card';
import { CSSTransition } from 'react-transition-group';
import './Set.css';
import { useLocation } from 'react-router-dom';

export function Set() {
    const location = useLocation();
    const { set } = location.state || {};

    const data = require('./data');
    const filteredCards = data.filter((item) => item.setName === set);

    const [step, setStep] = useState(0);

    const goToPreviousCard = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const goToNextCard = () => {
        if (step < filteredCards.length - 1) {
            setStep(step + 1);
        }
    };

    return (
        <div>
            <h2>Название набора</h2>
            <CSSTransition
                in={true}
                appear
                key={step}
                timeout={500} // Время анимации в миллисекундах
                classNames="card"
            >
                {filteredCards.length > 0 ? (
                    <Card key={filteredCards[step].id} front={filteredCards[step].front} back={filteredCards[step].back} />
                ) : (
                    <div>Нет доступных карточек.</div>
                )}
            </CSSTransition>
            <div>
                <span>{step + 1}/{filteredCards.length}</span>
                <button onClick={goToPreviousCard}>Назад</button>
                <button onClick={goToNextCard}>Вперед</button>
            </div>
        </div>
    );
}
