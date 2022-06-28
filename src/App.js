import './App.css';
import './style.css';
import {React,useState} from 'react';
function App() {

  const [act,setAct] = useState('home');

  const getActive = (idea) => {
    return idea === act ? 'active' : '';
  }
  return (
    <div className="App">
        <div className='header'>
          MY ASSIGNMENT
        </div>
        <div className='button-tag'>
            <a href='#about_me' onClick={() => setAct('home')} className={`button-tag-item ${getActive('home')}`}>HOME</a>
            <a href='#my_hobby' onClick={() => setAct('my-hobby')} className={`button-tag-item ${getActive('my-hobby')}`}>MY HOBBY</a>
            <a href='#my_favorite' onClick={() => setAct('my_favorite')} className={`button-tag-item ${getActive('my_favorite')}`}>MY FAVORITE</a>
        </div>
        <div id='about_me' className='tag'>
          <u>ABOUT ME</u>
        </div>
        <div className='row'>
          <div className='col c-10 c-o-1 m-8 m-o-2 l-6 l-o-3'>
            <div className='tag_about-me-container'>
                <div className='tag_about-me-image'>
                  <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1647656350/Avatar/l4tfoct4j4ixe9bhn9cu.jpg' />
                </div>
                <div className='tag_about-me-detail'>
                    <div className='tag_about-me-name'>
                      <span>Name: Minh Quang</span>
                    </div>
                    <div className='tag_about-me-birthday'>
                      <span>Birthday: 22/09/2002</span>
                    </div>
                    <div className='tag_about-me-description'>
                      <span>Education: University in Viet Nam</span>
                    </div>
                    <div className='tag_about-me-description'>
                      <span>Address: Ha Noi - Viet Nam</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div id='my_hobby' className='tag'>
          <u>MY HOBBY</u>
        </div>
        <div className='hobby_container'>
          <div className='row'>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656384237/Avatar/x6exfdf8xte5wlgetaii.jpg' />
                  </div>
              </div>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656384385/Avatar/rlsgmkbtkjsimx2euzcu.jpg' />
                  </div>
              </div>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656384309/Avatar/lfffivzrdhyqtct8vwfb.jpg' />
                  </div>
              </div>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656383680/Avatar/t18jqqn0t3ejhtowyww1.webp' />
                  </div>
              </div>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656383781/Avatar/vvwlqncom7s8ufiqnxoe.jpg' />
                  </div>
              </div>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656384277/Avatar/jmunisphieoeef8hszqz.jpg' />
                  </div>
              </div>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656384083/Avatar/y4t88ldhgb8y2kq3owoc.jpg' />
                  </div>
              </div>
              <div className='col c-6 m-4 l-3'>
                  <div className='hobby_image'>
                    <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656384199/Avatar/xl72eom3oyqjgmxujy3y.jpg' />
                  </div>
              </div>
          </div>
        </div>
        <div id='my_favorite' className='tag'>
          <u>MY FAVORITE</u>
        </div>
        <div className='hobby_container'>
          <div className='row'>
            <div className='col c-10 c-o-1 m-6 l-4'>
                <div className='idol_container'>
                <div className='idol_image'>
                      <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656385839/Avatar/zvpoo6tcxyzkaazg3ued.jpg' />
                    </div>
                </div>
            </div>
            <div className='col c-10 c-o-1 m-6 l-4'>
                <div className='idol_container'>
                <div className='idol_image'>
                      <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656385805/Avatar/qtfdqle16so3zipp5mpu.jpg' />
                    </div>
                </div>
            </div>
            <div className='col c-10 c-o-1 m-6 l-4'>
                <div className='idol_container'>
                    <div className='idol_image'>
                      <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656385518/Avatar/yjxgcm9lffqikdmaetrn.jpg' />
                    </div>
                </div>
            </div>
            <div className='col c-10 c-o-1 m-6 l-4'>
                <div className='idol_container'>
                    <div className='idol_image'>
                      <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656386589/Avatar/szo6trop5yvmena6vmmd.jpg' />
                    </div>
                </div>
            </div>
            <div className='col c-10 c-o-1 m-6 l-4'>
                <div className='idol_container'>
                    <div className='idol_image'>
                      <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656386771/Avatar/dnpcnvufrylekqgh8u1f.jpg' />
                    </div>
                </div>
            </div>
            <div className='col c-10 c-o-1 m-6 l-4'>
                <div className='idol_container'>
                    <div className='idol_image'>
                      <img src='https://res.cloudinary.com/dqbrxkux1/image/upload/v1656386831/Avatar/mfy1dbtmz2axqydwrjmi.jpg' />
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          THANK YOU FOR YOUR SUPPORT
        </div>
    </div>
  );
}

export default App;
