import React from 'react'
import './question.css'
import { handleTracking } from 'utils/tracking'

export default function Question() {
  return (
    <section className='section question'>
      <div className="container">
        <div className="question__wrapper">
          <div className="question__title h2">выберите роль</div>

          <div className="question__btns">
            <div className="question__card">
              <div className="question__card-title">Автор</div>

              <div className="question__card-img">
                <img src="./img/question/img-1.png" alt="img" />
              </div>

              <div className="question__card-desc">
                Буду создавать <br className='br-mobile' /> рекламные посты и&nbsp;клипы
              </div>

              <a
                href="/for-authors"
                className="question__card-btn btn btn_border btn_rounded btn_wide text-20 fw-500"
                onClick={() => handleTracking('create-content')}
              >
                Перейти
              </a>
            </div>

            <div className="question__card">
              <div className="question__card-title">Рекламодатель</div>

              <div className="question__card-img">
                <img src="./img/question/img-2.png" alt="img" />
              </div>

              <div className="question__card-desc">
                Буду заказывать <br /> рекламу у&nbsp;авторов
              </div>

              <a
                href="/for-advertisers"
                className="question__card-btn btn btn_border btn_rounded btn_wide text-20 fw-500"
                onClick={() => handleTracking('order-adv')}
              >
                Перейти
              </a>
            </div>
          </div>

          <a href="/app" className="question__link">
            Перейти в кабинет
          </a>
        </div>
      </div>
    </section>
  )
}