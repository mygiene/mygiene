import React from "react";
import Banner from "../BaseComponent/Banner";
import FaqsWrapper from "./style.faqs";

const faqsContent = [
  {
    ques: "What makes the product eco-friendly?",
    ans: "Mygiene incorporates a number of different recyclable materials to support a healthy impact on the environment. It’s never been easier to swap plastic products and materials for eco-friendly alternatives.",
  },
  {
    ques: "How long does the kit last?",
    ans: "We’ve designed each product in the kit to last for 30 days. This means the kit is ideal for use across the full duration of the average holiday. You can use it every day if required, or you can simply call upon the kit as and when you require. Order as often as you like so you always have what you need.",
  },
  {
    ques: "Are the items advertised available for individual purchase?",
    ans: "No, we provide Mygiene as an all-inclusive package.",
  },
  {
    ques: "Do you offer refills for the kit?",
    ans: "We don’t provide refills, unfortunately, but your razor handle is compatible with the Gillette Mach 3 razor attachment available from your closest supermarket. Also, your soap case is designed to fit a standard 100ml bar of soap.",
  },
  {
    ques: "Can I purchase Mygiene at the supermarket?",
    ans: "Our kits aren’t available in stores at the present time.",
  },
  {
    ques: "Are travel kits worthwhile?",
    ans: "Travel kits give customers plenty of value, thanks to their included bags and organizational elements. Many of our kits are designed with special storing features and functions to help you get even more from the product.",
  },
  {
    ques: "Wait, I still want to know more?",
    ans: "No worries! You can email us at info@mygiene.com.au, or message us on Instagram or Facebook @mygiene_aus.",
  },
];
const FaqsPage = () => {
  return (
    <FaqsWrapper>
      <Banner title="Frequently Asked Questions (FAQs)" Image="/banner_1.jpg" />

      <div className="faqs">
        <div className="heading">
          <h3>We're are here to answer all your questions</h3>
        </div>
        <div className="content">
          {faqsContent.map((item, index) =>
            index === 0 ? (
              <details open>
                <summary>
                  <span>{item.ques}</span>
                </summary>
                <p>{item.ans}</p>
              </details>
            ) : (
              <details>
                <summary>{item.ques}</summary>
                <p>{item.ans}</p>
              </details>
            )
          )}
        </div>
      </div>
    </FaqsWrapper>
  );
};

export default FaqsPage;
