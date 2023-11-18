/** @format */

import { useState } from "react";

const tabs = [
  {
    id: 0,
    title: "descption",
    content: `
    Technology: GSM / HSPA / LTE
Dimensions: 146 x 72 x 8.1 mm
Weight: 161 g
Display: IPS LCD 5.2 inches
Resolution: 1080 x 1920
OS: Android OS, v6.0.1 (Marshmallow)
Chipset: Snapdragon 820
CPU: Quad-core
Internal: 32/64 GB
Camera: 23 MP, f/2.0 - 13 MP, f/2.0
Sony's latest flagship, the Xperia Z6 comes with refined design, improved camera, and a due update in specs. Wait, back up a little there - it's actually called the Xperia XZ this time around but, yeah, the rest of that is true.

When Sony announced the new X-series, some suggested that the Xperia X Performance was meant to take on the likes of the Galaxy S7's and HTC 10's, but we knew that couldn't be the case. Okay, 'suspected' might be more accurate there. Obviously, now we all know that the Xperia XZ is Sony's top-dog for this season, and the Z in its name quickly reveals its ancestry.

Indeed, the XZ has a lot in common with the Z5. The display, for one, is the same size and resolution as the last generation - not necessarily a bad thing, but the XZ also comes with 3GB of RAM - modern-day flagships will crack a condescending smile seeing that in the spec sheet.

No one will laugh at the rest of it, though - top-of-the-line Snapdragon 820 chipset, 23MP camera with a trio of focusing technologies and 4K video recording (one could think the Z is required for that, had it not been for the M5), high-res 13MP front camera, Type-C connectivity, fingerprint reader, IP68 rating, stereo speakers - name one thing missing.
    `,
  },
  {
    id: 1,
    title: "warranty",
    content: `
    WARRANTY INFORMATION
LIMITED WARRANTIES
Limited Warranties are non-transferable. The following Limited Warranties are given to the original retail purchaser of the following Ashley Furniture Industries, Inc.Products:

Frames Used In Upholstered and Leather Products
Limited Lifetime Warranty
A Limited Lifetime Warranty applies to all frames used in sofas, couches, love seats, upholstered chairs, ottomans, sectionals, and sleepers. Ashley Furniture Industries,Inc. warrants these components to you, the original retail purchaser, to be free from material manufacturing defects.
    `,
  },
  {
    id: 2,
    title: "delivery",
    content: `
    PURCHASING & DELIVERY
Before you make your purchase, it’s helpful to know the measurements of the area you plan to place the furniture. You should also measure any doorways and hallways through which the furniture will pass to get to its final destination.
Picking up at the store
Shopify Shop requires that all products are properly inspected BEFORE you take it home to insure there are no surprises. Our team is happy to open all packages and will assist in the inspection process. We will then reseal packages for safe transport. We encourage all customers to bring furniture pads or blankets to protect the items during transport as well as rope or tie downs. Shopify Shop will not be responsible for damage that occurs after leaving the store or during transit. It is the purchaser’s responsibility to make sure the correct items are picked up and in good condition.
Delivery
Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.
In preparation for your delivery, please remove existing furniture, pictures, mirrors, accessories, etc. to prevent damages. Also insure that the area where you would like your furniture placed is clear of any old furniture and any other items that may obstruct the passageway of the delivery team. Shopify Shop will deliver, assemble, and set-up your new furniture purchase and remove all packing materials from your home. Our delivery crews are not permitted to move your existing furniture or other household items. Delivery personnel will attempt to deliver the purchased items in a safe and controlled manner but will not attempt to place furniture if they feel it will result in damage to the product or your home. Delivery personnel are unable to remove doors, hoist furniture or carry furniture up more than 3 flights of stairs. An elevator must be available for deliveries to the 4th floor and above.
    `,
  },
  {
    id: 3,
    title: "payment",
    content: `
Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.
In preparation for your delivery, please remove existing furniture, pictures, mirrors, accessories, etc. to prevent damages. Also insure that the area where you would like your furniture placed is clear of any old furniture and any other items that may obstruct the passageway of the delivery team. Shopify Shop will deliver, assemble, and set-up your new furniture purchase and remove all packing materials from your home. Our delivery crews are not permitted to move your existing furniture or other household items. Delivery personnel will attempt to deliver the purchased items in a safe and controlled manner but will not attempt to place furniture if they feel it will result in damage to the product or your home. Delivery personnel are unable to remove doors, hoist furniture or carry furniture up more than 3 flights of stairs. An elevator must be available for deliveries to the 4th floor and above.
    `,
  },
  {
    id: 4,
    title: "customer review",
    content: `
    CUSTOMER REVIEWS
Based on 1 review
Write a review
Good device
Tadatheme on May 20, 2017
You could engage with augmented reality with a headset, and see 3D objects "projected" into your real world -- something that's usually called "mixed reality." Augmented reality doesn't need a headset, though. It can use your phone. In fact, it already does. 2016's summer smash hit Pokemon Go was the most widespread use of AR ever seen.
    `,
  },
];

const ProductInfo = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  console.log("isActiveTab", isActiveTab);
  return (
    <div className="relative">
      <ul className="flex gap-2 bottom-[-1px] translate-y-[1px]">
        {tabs?.map((tab, index) => (
          <li
            onClick={() => setIsActiveTab(index)}
            key={index}
            className={`${
              isActiveTab === index ? "bg-white" : "bg-[#f1f1f1]"
            }  cursor-pointer text-[15px] uppercase px-5 py-[9px] text-black border-[1px] border-solid border-b-0 border-[#ebebeb]`}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="border-[1px] border-solid  border-[#ebebeb] p-5 text-[14px] text-[#505050] leading-5">
        <p>{tabs?.find((tab, index) => isActiveTab === index).content}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
