import React from "react";
import Banner from "../BaseComponent/Banner";
import Navigation from "../BaseComponent/Navigation";
import RefundWrapper from "./style.refund";
import Image from "next/image";
export const ReturnRefund = () => {
  return (
    <>
      <RefundWrapper>
        <Banner Image="/banner_1.jpg" title="Returns & Refund" />

        <div className="container">
          <Navigation />
          <div className="content__right">
            <h3>Returns & Refund Policy</h3>
            <p>
              At Mygiene we stand behind our product and provide a level of
              quality consistent with industry standards.
              <br />
              Please contact Support to begin the return and we will walk you
              through the process at <a>info@mygiene.com.au</a>
            </p>
            <p>
              To complete your return, we require a receipt or proof of
              purchase. Our policy lasts for 30 days if 30 days have gone by
              since your purchase, unfortunately we can’t offer you a refund or
              exchange. The consensus of the purchase of personal care items
              such as toothpaste, toothbrushes, shampoos, deodorants, hygiene
              products, soaps, cannot be returned however if found defective can
              warrant a replacement.
            </p>
            <h4>Exchanges</h4>
            <p>
              In certain cases such as defective items or damaged items, you may
              be required to provide evidence of the issue, such as a photo and
              the product. We only replace items if they are defective or
              damaged by manufacturer default. If you need to make an exchange,
              please send us an email at info@mygiene.com.au and we will direct
              you from there. Once your return is received and inspected, we
              will send you an email to notify you that we have received your
              returned item. We will also notify you of the approval or
              rejection of your refund. If you are approved, then your refund
              will be processed, and a credit will automatically be applied to
              your credit card or original method of payment, within a certain
              amount of days.
            </p>
            <h4>Late or missing refunds:</h4>
            <ul>
              <li>
                If you haven’t received a refund yet, first check your bank
                account again.
              </li>
              <li>
                Then contact your credit card company, it may take some time
                before your refund is officially posted.
              </li>
              <li>
                Next contact your bank. There is often some processing time
                before a refund is posted.
              </li>
              <li>
                If you’ve done all of this and you still have not received your
                refund yet, please contact us at <a>info@mygiene.com.au</a> and
                the necessary actions will be made.
              </li>
            </ul>
            <p>
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are non-refundable. Depending
              on where you live, the time it may take for your exchanged product
              to reach you, may vary. The product will remain your
              responsibility during transit until they are received at the
              address supplied by our staff. We do not accept any liability for
              any loss or damage which may occur during transit. Mygiene
              reserves the right to refuse any refund if in good faith suspects
              abuse of this policy or violations of the terms of service policy.
            </p>
          </div>
        </div>
      </RefundWrapper>
    </>
  );
};

// export default ReturnRefund;
