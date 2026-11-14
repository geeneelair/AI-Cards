import battery0 from './assets/img/Battery_0.svg'
import battery1 from './assets/img/Battery_1.svg'
import battery2 from './assets/img/Battery_2.svg'
import battery3 from './assets/img/Battery_3.svg'
import tierStars from './assets/img/tier_stars.svg'
import alarmIcon from './assets/img/alarm.svg'
import buffIcon from './assets/img/buff_icon.svg'
import './Card.css'
import Xp from './Xp.jsx'


const batteryIcons = [battery0, battery1, battery2, battery3]

function Card({title, tier, battery = 1, m = 0, n = 5}) {
  const batteryIcon = batteryIcons[battery] ?? battery1

  return (
    <div className='Card'>
      <div className="header">
          <div className="energy">
              <img src={batteryIcon} alt="Battery" />
          </div>
          <div className="title">
              {title}
          </div>
          <div className="tier">
              <div className="tier_text">{tier}</div>

              <img className="stars" src={tierStars} alt="Stars" />
          </div>
      </div>
      <div className="image">
          <div className="image_icon">

          </div>
          <div className="bg">

          </div>
      </div>
      <Xp current={m} required={n}/>
      <div className="footer">
          <div className="info_container">
              <div className="tt_container">
                  <div className="tt_icon">
                      <img className="tt_alarm" src={alarmIcon} alt="clock" />
                  </div>
                  <div className="tt_body">
                      <div className="tt_title">
                          <div className="tt_time">Время</div>
                          <div className="tt_trigger">Триггер</div>
                      </div>
                      <div className="tt_content">
                          <div className="tt_cur_time">16:40</div>
                          <div className="tt_cur_trigger">Lorem, ipsum.</div>
                      </div>
                  </div>
              </div>
              <div className="sb_container">
                  <div className="sb_icon">
                      <img className="sb_buff" src={buffIcon} alt="buff" />
                  </div>
                  <div className="sb_body">
                      <div className="sb_title">
                          Краткосрочные баффы
                      </div>
                      <div className="sb_content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card
