// import React,{useState} from 'react';
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { FaArrowRight, FaAngleUp, FaAngleDown } from "react-icons/fa";
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import "./css/Rating.css"

// export default function Rating() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const reviews = [
//     {
//       name: "Umesh Bandgar",
//       date: "July 20, 2025",
//       description: "It's working fast. I withdrawal 2500 rs in 10 minut",
//       rating: 5,
//       likes: 486,
//       image: "./images/1.webp",
//       hasResponse: true,
//       responseText: "Thanks you for your positive feedback! We’re thrilled to hear that you enjoyed the game. Keep spinning and have a fantastic time!",
//       responseDate: "July 21, 2025"
//     },
//     {
//       name: "দুষ্টু ছেলে মঙ্গলদীপ",
//       date: "July 20, 2025",
//       description: "Cannot believe it make me rich. Playing Aviator is very easy",
//       rating: 5,
//       likes: 510,
//       image: "./images/2.webp",
//     },
//     {
//       name: "Maghraj Arya",
//       date: "July 19, 2025",
//       description: "Maine sirf 400 lga kar 6000 nikal liya",
//       rating: 5,
//       likes: 892,
//       image: "./images/3.webp",
//       hasResponse: true,
//       responseText: "Thanks for talking the time to leave a request! We’re delighted that you’re enjoying the game and having a great experience. Keep spinning and winning!",
//       responseDate: "July 19, 2025"
//     },
//     {
//       name: "Hamman Sekh",
//       date: "July 19, 2025",
//       description: "I’m not normally one for reviews, but Aviator has earned this one. It’s exhilarating, and the winnings are fantastic. This app is a must!",
//       rating: 5,
//       likes: 918,
//       image: "./images/4.webp",
//       hasResponse: true,
//       responseText: "Your feedback made our day! We’re thrilled to be a part of your gaming journey and provide you with entertaining gameplay. Enjoy and have fun!",
//       responseDate: "July 19, 2025"
//     },
//     {
//       name: "Sra Pathan",
//       date: "july 18, 2025",
//       description: "I got hooked on this game from the very first moment of playing. I was pleasantly surprised",
//       rating: 5,
//       likes: "1k",
//       image: "./images/5.webp",
//       hasResponse: true,
//       responseText: "Thanks you for your positive review! We’re glad that the game brings excitement and enjoyment to your gamins sessions. Winning you many big wins!",
//       responseDate: "July 18, 2025"
//     },
//     {
//       name: "Vanshubh Raja",
//       date: "July 18, 2025",
//       description: "From the sign-up bonus to the big wins, Aviator exceeded all my expectations. This is how a casino game should be!",
//       rating: 4,
//       likes: "1.4K",
//       image: "./images/6.webp"
//     },
//   ];

//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, i) => (
//       i < rating ? (
//         <AiFillStar
//           key={i}
//           style={{
//             color: '#01875f',
//             fontSize: '14px',
//             marginRight: '2px'
//           }}
//         />
//       ) : (
//         <AiOutlineStar
//           key={i}
//           style={{
//             color: '#dee2e6',
//             fontSize: '14px',
//             marginRight: '2px'
//           }}
//         />
//       )
//     ));
//   };

//   const renderReview = (review) => (
//     <div className="d-flex" style={{ gap: '12px', paddingBottom: '24px' }}>
//       <img
//         src={review.image}
//         alt={review.name}
//         className="rounded-circle"
//         style={{
//           width: '40px',
//           height: '40px',
//           objectFit: 'cover'
//         }}
//       />
//       <div style={{ flex: 1 }}>
//         <div className="d-flex justify-content-between align-items-center">
//           <h6 className="mb-0" style={{ fontWeight: '500', color: '#212529' }}>{review.name}</h6>
//           <BsThreeDotsVertical style={{ fontSize: '20px', color: '#6c757d' }} />
//         </div>

//         <div className="d-flex align-items-center" style={{ gap: '8px', marginTop: '4px', marginBottom: '12px' }}>
//           <div className="d-flex">
//             {renderStars(review.rating)}
//           </div>
//           <small style={{ color: '#6c757d' }}>{review.date}</small>
//         </div>

//         <p style={{
//           color: '#495057',
//           marginBottom: '16px',
//           fontSize: '14px',
//           lineHeight: '1.5'
//         }}>
//           {review.description}
//         </p>

//         <small style={{ color: '#6c757d', marginBottom: '12px', display: 'block' }}>
//           {review.likes} people found this review helpful
//         </small>

//         <div className="d-flex align-items-center" style={{ gap: '24px', marginBottom: '16px' }}>
//           <small style={{ color: '#6c757d' }}>Did you find this helpful?</small>
//           <div className="d-flex" style={{ gap: '16px' }}>
//             <span style={{
//               fontSize: '14px',
//               color: '#6c757d',
//               textDecoration: 'none',
//               cursor: 'pointer',
//               border: '1px solid #bcbcbcff',
//               borderRadius: '16px',
//               padding: '0px 10px',
//               letterSpacing: '1px',
//               lineHeight: '22px'
//             }} >
//               Yes
//             </span>
//             <span style={{
//               fontSize: '14px',
//               color: '#6c757d',
//               textDecoration: 'none',
//               cursor: 'pointer',
//               border: '1px solid #bcbcbcff',
//               borderRadius: '16px',
//               padding: '0px 10px',
//               letterSpacing: '1px',
//               lineHeight: '22px'
//             }} >
//               No
//             </span>
//           </div>
//         </div>

//         {review.hasResponse && (
//           <div style={{
//             marginTop: '16px',
//             backgroundColor: '#f8f9fa',
//             borderRadius: '8px',
//             padding: '16px'
//           }}>
//             <div className="d-flex align-items-center" style={{ gap: '8px', marginBottom: '8px' }}>
//               <small style={{ fontWeight: '500', color: '#212529' }}>Casino Apps</small>
//               <small className='ms-auto ' style={{ color: '#6c757d' }}>{review.responseDate}</small>
//             </div>
//             <p style={{
//               fontSize: '14px',
//               color: '#495057',
//               lineHeight: '1.5',
//               margin: '0'
//             }}>
//               {review.responseText}
//             </p>
//           </div>
//         )}
//       </div>
//     </div >
//   );
//   // Use reviews directly with map function
//   return (
//  <div className="containers rating-wrapper" style={{ maxWidth: '100%', padding:'0px 100px', backgroundColor: 'white' }}>
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center" style={{ borderBottom: '1px solid #dee2e6' }}>
//         <h5 className="mb-0" style={{ fontWeight: '500', color: '#212529' }}>Ratings and reviews</h5>
//         <FaArrowRight style={{ width: '20px', height: '20px', color: '#6c757d' }} />
//       </div>
//       {/* Overall Rating Section */}
//       <div className="p-4">
//         <div className="row">
//           <div className="col-auto">
//             {/* Overall Score */}
//             <div className="d-flex flex-column">
//               <div style={{ fontSize: '5rem', fontWeight: '300', color: '#212529', marginBottom: '4px', lineHeight: '1' }}>
//                 4.9
//               </div>
//               <div className="d-flex align-items-center mb-1">
//                 {renderStars(5)}
//               </div>
//               <small style={{ color: '#6c757d' }}>19K reviews</small>
//             </div>
//           </div>
//           <div className="col" style={{ paddingLeft: '48px' }}>
//             {/* Rating Distribution */}
//             <div style={{ maxWidth: '100%' }}>
//               {[5, 4, 3, 2, 1].map((stars) => (
//                 <div key={stars} className="d-flex align-items-center mb-1" style={{ gap: '12px' }}>
//                   <small style={{ color: '#6c757d', width: '8px' }}>{stars}</small>
//                   <div style={{
//                     flex: 1,
//                     backgroundColor: '#dee2e6',
//                     borderRadius: '10px',
//                     height: '8px',
//                     position: 'relative'
//                   }}>
//                     <div style={{
//                       height: '10px',
//                       borderRadius: '10px',
//                       backgroundColor: '#01875f',
//                       width: stars === 5 ? '85%' : stars === 4 ? '10%' : '0%'
//                     }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* All Reviews using map function */}
//       <div className="mt-3">
//         {reviews.map((review, index) => (
//           <div key={index} style={{ marginBottom: '24px' }}>
//             {renderReview(review)}
//           </div>
//         ))}
//       </div>
//       <div style={{
//         margin: '0px 0px 15px 70px', borderBottom: '1px solid #b2b1b1ff'
//       }}>
//         <h6 className='seeallreviewspages'
//           style={{ color: '#01875f', marginTop: '-20px' }}
//         >See All reviews</h6>
//         <h2 style={{ color: '#202124', fontSize: "1.125rem", marginTop: '20px' }}>What's New</h2>

//         <div className="main d-flex" style={{}} onClick={handleToggle}>
//           <h2 style={{ color: '#202124', fontSize: "1.125rem", marginTop: '20px' }}>
//             Contact Developer
//           </h2>

//           {isExpanded ? (
//             <FaAngleDown className="about-arrow ms-auto" />
//           ) : (
//             <FaAngleUp className="about-arrow ms-auto" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaArrowRight, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function Rating() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const reviews = [
    {
      name: "Umesh Bandgar",
      date: "July 20, 2025",
      description: "It's working fast. I withdrawal 2500 rs in 10 minut",
      rating: 5,
      likes: 486,
      image: "./images/1.webp",
      hasResponse: true,
      responseText: "Thanks you for your positive feedback! We're thrilled to hear that you enjoyed the game. Keep spinning and have a fantastic time!",
      responseDate: "July 21, 2025"
    },
    {
      name: "দুষ্টু ছেলে মঙ্গলদীপ",
      date: "July 20, 2025",
      description: "Cannot believe it make me rich. Playing Aviator is very easy",
      rating: 5,
      likes: 510,
      image: "./images/2.webp",
    },
    {
      name: "Maghraj Arya",
      date: "July 19, 2025",
      description: "Maine sirf 400 lga kar 6000 nikal liya",
      rating: 5,
      likes: 892,
      image: "./images/3.webp",
      hasResponse: true,
      responseText: "Thanks for talking the time to leave a request! We're delighted that you're enjoying the game and having a great experience. Keep spinning and winning!",
      responseDate: "July 19, 2025"
    },
    {
      name: "Hamman Sekh",
      date: "July 19, 2025",
      description: "I'm not normally one for reviews, but Aviator has earned this one. It's exhilarating, and the winnings are fantastic. This app is a must!",
      rating: 5,
      likes: 918,
      image: "./images/4.webp",
      hasResponse: true,
      responseText: "Your feedback made our day! We're thrilled to be a part of your gaming journey and provide you with entertaining gameplay. Enjoy and have fun!",
      responseDate: "July 19, 2025"
    },
    {
      name: "Sra Pathan",
      date: "july 18, 2025",
      description: "I got hooked on this game from the very first moment of playing. I was pleasantly surprised",
      rating: 5,
      likes: "1k",
      image: "./images/5.webp",
      hasResponse: true,
      responseText: "Thanks you for your positive review! We're glad that the game brings excitement and enjoyment to your gamins sessions. Winning you many big wins!",
      responseDate: "July 18, 2025"
    },
    {
      name: "Vanshubh Raja",
      date: "July 18, 2025",
      description: "From the sign-up bonus to the big wins, Aviator exceeded all my expectations. This is how a casino game should be!",
      rating: 4,
      likes: "1.4K",
      image: "./images/6.webp"
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      i < rating ? (
        <AiFillStar
          key={i}
          style={{
            color: '#01875f',
            fontSize: '14px',
            marginRight: '2px'
          }}
        />
      ) : (
        <AiOutlineStar
          key={i}
          style={{
            color: '#dee2e6',
            fontSize: '14px',
            marginRight: '2px'
          }}
        />
      )
    ));
  };

  const renderReview = (review) => (
    <div
      className="d-flex flex-column flex-sm-row"
      style={{
        gap: '12px',
        paddingBottom: '24px',
        wordBreak: 'break-word'
      }}
    >
      <div className="d-flex flex-shrink-0 align-items-start">
        <img
          src={review.image}
          alt={review.name}
          className="rounded-circle"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover'
          }}
        />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-2">
          <h6
            className="mb-0 text-truncate"
            style={{
              fontWeight: '500',
              color: '#212529',
              maxWidth: '250px'
            }}
          >
            {review.name}
          </h6>
          <BsThreeDotsVertical
            style={{
              fontSize: '20px',
              color: '#6c757d',
              flexShrink: 0
            }}
          />
        </div>

        <div
          className="d-flex flex-wrap align-items-center"
          style={{
            gap: '8px',
            marginTop: '4px',
            marginBottom: '12px'
          }}
        >
          <div className="d-flex">
            {renderStars(review.rating)}
          </div>
          <small style={{ color: '#6c757d' }}>{review.date}</small>
        </div>

        <p style={{
          color: '#495057',
          marginBottom: '16px',
          fontSize: '14px',
          lineHeight: '1.5',
          wordBreak: 'break-word'
        }}>
          {review.description}
        </p>

        <small
          style={{
            color: '#6c757d',
            marginBottom: '12px',
            display: 'block'
          }}
        >
          {review.likes} people found this review helpful
        </small>

        <div
          className="d-flex flex-wrap align-items-center"
          style={{
            gap: '16px',
            marginBottom: '16px'
          }}
        >
          <small style={{ color: '#6c757d' }}>Did you find this helpful?</small>
          <div className="d-flex flex-wrap gap-2">
            <span style={{
              fontSize: '14px',
              color: '#6c757d',
              textDecoration: 'none',
              cursor: 'pointer',
              border: '1px solid #bcbcbcff',
              borderRadius: '16px',
              padding: '4px 12px',
              letterSpacing: '1px',
              lineHeight: '20px',
              whiteSpace: 'nowrap'
            }}>
              Yes
            </span>
            <span style={{
              fontSize: '14px',
              color: '#6c757d',
              textDecoration: 'none',
              cursor: 'pointer',
              border: '1px solid #bcbcbcff',
              borderRadius: '16px',
              padding: '4px 12px',
              letterSpacing: '1px',
              lineHeight: '20px',
              whiteSpace: 'nowrap'
            }}>
              No
            </span>
          </div>
        </div>

        {review.hasResponse && (
          <div style={{
            marginTop: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div
              className="d-flex flex-wrap justify-content-between align-items-center"
              style={{
                gap: '8px',
                marginBottom: '8px'
              }}
            >
              <small style={{ fontWeight: '500', color: '#212529' }}>
                Casino Apps
              </small>
              <small style={{ color: '#6c757d' }}>
                {review.responseDate}
              </small>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#495057',
              lineHeight: '1.5',
              margin: '0',
              wordBreak: 'break-word'
            }}>
              {review.responseText}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="container-fluid"
      style={{
        maxWidth: '100%',
        backgroundColor: 'white',
        padding: '0',
        margin: '0'
      }}
    >
      {/* Responsive Container */}
      <div style={{
        padding: '16px',
        '@media (min-width: 768px)': {
          padding: '32px'
        }
      }}>

        {/* Header */}
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            borderBottom: '1px solid #dee2e6',
            paddingBottom: '16px',
            marginBottom: '24px'
          }}
        >
          <h5
            className="mb-0"
            style={{
              fontWeight: '500',
              color: '#212529',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
            }}
          >
            Ratings and reviews
          </h5>
          <FaArrowRight
            style={{
              width: '20px',
              height: '20px',
              color: '#6c757d',
              flexShrink: 0
            }}
          />
        </div>

        {/* Overall Rating Section */}
        <div className="mb-4">
          <div className="row g-3 g-md-4">
            <div className="col-12 col-md-auto">
              {/* Overall Score */}
              <div className="d-flex flex-column align-items-center align-md-start">
                <div style={{
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  fontWeight: '300',
                  color: '#212529',
                  marginBottom: '4px',
                  lineHeight: '1'
                }}>
                  4.9
                </div>
                <div className="d-flex align-items-center mb-1">
                  {renderStars(5)}
                </div>
                <small style={{ color: '#6c757d' }}>19K reviews</small>
              </div>
            </div>

            <div className="col-12 col-md">
              {/* Rating Distribution */}
              <div style={{ maxWidth: '100%' }}>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div
                    key={stars}
                    className="d-flex align-items-center mb-2"
                    style={{ gap: '12px' }}
                  >
                    <small
                      style={{
                        color: '#6c757d',
                        width: '12px',
                        textAlign: 'center',
                        flexShrink: 0
                      }}
                    >
                      {stars}
                    </small>
                    <div style={{
                      flex: 1,
                      backgroundColor: '#dee2e6',
                      borderRadius: '10px',
                      height: '8px',
                      position: 'relative',
                      minWidth: '100px'
                    }}>
                      <div style={{
                        height: '8px',
                        borderRadius: '10px',
                        backgroundColor: '#01875f',
                        width: stars === 5 ? '85%' : stars === 4? '10%': stars === 3 ? '5%' : '0%',
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Reviews */}
        <div className="mt-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                marginBottom: '24px',
                borderBottom: index < reviews.length - 1 ? '1px solid #f1f1f1' : 'none',
                paddingBottom: index < reviews.length - 1 ? '24px' : '0'
              }}
            >
              {renderReview(review)}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div style={{
          margin: '24px 0px 15px 0px',
          borderBottom: '1px solid #b2b1b1ff',
          paddingBottom: '20px'
        }}>
          <div
            className="d-flex flex-wrap justify-md-start"
            style={{ marginBottom: '20px' }}
          >
            <h6
              style={{
                color: '#01875f',
                margin: '0',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              See All reviews
            </h6>
          </div>

          <h2
            style={{
              color: '#202124',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              marginBottom: '20px',
              justifyContent: "start"
            }}
          >
            What's New
          </h2>

          <div
            className="d-flex"
            style={{
              cursor: 'pointer',
              padding: '10px 0'
            }}
            onClick={handleToggle}
          >
            <h2
              style={{
                color: '#202124',
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                margin: '0',
                flex: 1,
              }}
            >
              Contact Developer
            </h2>

            <div style={{ flexShrink: 0, marginLeft: '16px' }}>
              {isExpanded ? (
                <FaAngleDown
                  style={{
                    fontSize: '20px',
                    color: '#6c757d',
                    transition: 'transform 0.3s ease'
                  }}
                />
              ) : (
                <FaAngleUp
                  style={{
                    fontSize: '20px',
                    color: '#6c757d',
                    transition: 'transform 0.3s ease'
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}