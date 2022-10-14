/* eslint-disable @next/next/no-img-element */
import { MEMBERS, JOIN_URL } from '../../constants'

const AboutBlock = () => {
  return (
    <div className="about-block">
      <div className="about-block-side">
        <h3 className="title">About</h3>
        <div className="members-list">
          {MEMBERS.map((member, i) => (
            <div className="member" key={i}>
              <img
                src={member.avatar}
                alt={member.name}
                className="member__img"
              />
              <div className="member-content">
                <div className="member__name">{member.name}</div>
                <div className="member__position">{member.position}</div>
              </div>
            </div>
          ))}
        </div>
        <a href={JOIN_URL} className="btn btn-primary">
          Do you want to sing with us?
        </a>
      </div>
      <div className="about-block-content">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
          massa vitae tortor condimentum lacinia quis vel eros donec ac odio
          tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra
          vitae congue eu, consequat ac felis donec et odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </div>
        <img src="/assets/folk.png" alt="Moravski" className="illustration" />
        <img
          src="/assets/filarmonia.png"
          alt="Moravski"
          className="illustration"
        />
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
          massa vitae tortor condimentum lacinia quis vel eros donec ac odio
          tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra
          vitae congue eu, consequat ac felis donec et odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </div>
      </div>
    </div>
  )
}

export default AboutBlock

// const AboutBlock = () => {

//     return <div className="about">
//         <div>
//             <h1 className="paragraph">About</h1>
//             <div className="portrate">
//                 <div className="portrait-container">
//                     <img src="/assets/OlenaRadko.png" alt="Olena Radko" className="portrate__img"></img>
//                     <div className="portrate-info">
//                         <span className="portrate__name">Olena Radko</span>
//                         <span className="portrate__position">Artistic director and conductor</span>
//                     </div>
//                 </div>
//                 <div className="portrait-container">
//                     <img src="/assets/OlenaRadko.png" alt="Juliia Kuslyva" className="portrate__img"></img>
//                     <div className="portrate-info">
//                         <span className="portrate__name">Juliia Kuslyva </span>
//                         <span className="portrate__position">Conductor</span>
//                     </div>
//                 </div>
//                 <div className="portrait-container">
//                     <img src="/assets/OleksandrKravchuk.png" alt="Oleksandr Kravchuk" className="portrate__img"></img>
//                     <div className="portrate-info">
//                         <span className="portrate__name">Oleksandr Kravchuk</span>
//                         <span className="portrate__position">Conductor</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="info">
//             <div>
//                 <div className="info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</div>
//                 <img  src="/assets/folk.png" alt="Moravski" className="info__img"></img>
//             </div>
//             <div>
//                 <img  src="/assets/filarmonia.png" alt="Moravski" className="info__img"></img>
//                 <div className="info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</div>
//             </div>
//         </div>
//     </div>
// };
