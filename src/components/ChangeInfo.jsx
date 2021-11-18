import React from 'react'
import CardElement from './CardElement'


function ChangeInfo({speed = 0, percent = 100}) {
    return (
    <section className="change-info">
        <CardElement 
            title='Скорость'
            src={'https://cdn-icons.flaticon.com/png/512/473/premium/473729.png?token=exp=1637245666~hmac=71e7703aaf1c3848cfacea8ba0d9dbec'}
            value={speed}
            unit='зн./мин'
        />
        <CardElement 
            title='Точность'
            src={'https://cdn-icons.flaticon.com/png/512/3800/premium/3800833.png?token=exp=1637245880~hmac=5afb978ec771c53244b62ca243bd30b1'}
            value={percent}
            unit='%'
        />
    </section>
    )
}

export default ChangeInfo
