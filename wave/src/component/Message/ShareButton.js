// import React, { useState } from 'react';
// import "./ShareButton.css"
// import INVITE from "../../images/invite.png";
// import Whatsapp from "../../images/whatsapppng.png"
// import Twitter from "../../images/twitterpng.png"
// import Insta from "../../images/instapng.png"

// const ShareButton = () => {
//   const appURL = "https://github.com/dev-daizy/wave"; // Replace with your app's URL
//   const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

//   const handleShareButtonClick = () => {
//     // Copy the app URL to the clipboard
//     const dummyElement = document.createElement("textarea");
//     document.body.appendChild(dummyElement);
//     dummyElement.value = appURL;
//     dummyElement.select();
//     document.execCommand("copy");
//     document.body.removeChild(dummyElement);

//     // Show additional buttons after copying to clipboard
//     setShowAdditionalButtons(true);
//   };

//   const handleWhatsAppShare = () => {
//     const url = `whatsapp://send?text=${encodeURIComponent(appURL)}`;
//     window.open(url, '_blank');
//     setShowAdditionalButtons(false); // Hide additional buttons after clicking WhatsApp share
//   };

//   const handleTwitterShare = () => {
//     const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(appURL)}&text=Check out this cool chat app!`;
//     window.open(url, '_blank');
//     setShowAdditionalButtons(false); // Hide additional buttons after clicking Twitter share
//   };

//   const handleFacebookShare = () => {
//     const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appURL)}`;
//     window.open(url, '_blank');
//     setShowAdditionalButtons(false); // Hide additional buttons after clicking Facebook share
//   };

//   return (
//     <div className='share'>
//       <button onClick={handleShareButtonClick}>
//       <img src={INVITE} alt='share with friends' />
//       </button>
//       {showAdditionalButtons && (
//         <div className='shareOn'>
//           <button onClick={handleWhatsAppShare}>
//             <img src={Whatsapp} alt='share on whatsapp' />
//           </button>
//           <button  onClick={handleTwitterShare}>
//           <img id='twitter' src={Twitter} alt='share on twitter' />
//           </button>
//           <button  onClick={handleFacebookShare}>
//           <img id='insta' src={Insta} alt='share on Instagram' />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from 'react';
import "./ShareButton.css"
import INVITE from "../../images/invite.png";
import Whatsapp from "../../images/whatsapppng.png"
import Twitter from "../../images/twitterpng.png"
import Insta from "../../images/instapng.png"

const ShareButton = () => {
  const appURL = "https://github.com/dev-daizy/wave"; // Replace with your app's URL
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const handleShareButtonClick = () => {
    // If additional buttons are already shown, hide them
    if (showAdditionalButtons) {
      setShowAdditionalButtons(false);
      return;
    }

    // Copy the app URL to the clipboard
    const dummyElement = document.createElement("textarea");
    document.body.appendChild(dummyElement);
    dummyElement.value = appURL;
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);

    // Show additional buttons after copying to clipboard
    setShowAdditionalButtons(true);
  };

  const handleWhatsAppShare = () => {
    const url = `whatsapp://send?text=${encodeURIComponent(appURL)}`;
    window.open(url, '_blank');
    setShowAdditionalButtons(false); // Hide additional buttons after clicking WhatsApp share
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(appURL)}&text=Check out this cool chat app!`;
    window.open(url, '_blank');
    setShowAdditionalButtons(false); // Hide additional buttons after clicking Twitter share
  };

  const handleInstagramShare = () => {
    const url = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(appURL)}`;
    window.open(url, '_blank');
    setShowAdditionalButtons(false); // Hide additional buttons after clicking Facebook share
  };

  return (
    <div className='share'>
      <button onClick={handleShareButtonClick}>
        <img src={INVITE} alt='share with friends' />
      </button>
      {showAdditionalButtons && (
        <div className='shareOn'>
          <button onClick={handleWhatsAppShare}>
            <img src={Whatsapp} alt='share on whatsapp' />
          </button>
          <button onClick={handleTwitterShare}>
            <img id='twitter' src={Twitter} alt='share on twitter' />
          </button>
          <button onClick={handleInstagramShare}>
            <img id='insta' src={Insta} alt='share on Instagram' />
          </button>
        </div>
      )}
    </div>
  );
};


export default ShareButton;
