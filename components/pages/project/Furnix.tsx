import HeaderDetail from "@/components/HeaderDetail";
import Image from "next/image";
import React from "react";
import image from "@/public/images/project/furnix.png";
import shop from "@/public/images/project/furnix-shop.jpeg";
import cart from "@/public/images/project/furnix-cart.jpeg";
import detail from "@/public/images/project/furnix-detail.jpeg";
import filter from "@/public/images/project/furnix-filter.jpeg";
import wishlist from "@/public/images/project/furnix-wishlist.jpeg";
import blog from "@/public/images/project/furnix-blog.jpeg";

const Furnix = () => {
  return (
    <div>
      <HeaderDetail date="2024-08" title="Furnix App" />
      <div className="relative w-full overflow-hidden rounded-lg max-h-96">
        <Image
          src={image}
          alt="maksa"
          className="object-cover object-center w-full h-full"
          placeholder="blur"
        />
      </div>
      <section className="w-full mt-6">
        <h1 className="text-2xl font-semibold">Introduction</h1>
        <p>
          <a href="https://furnix-app.vercel.app" target="_blank">
            Furnix App
          </a>{" "}
          is a comprehensive e-commerce platform that offers a wide range of
          high-quality home furnishings and accessories to transform your living
          spaces. With a user-friendly interface and a diverse product
          selection, Furnix App provides a seamless shopping experience for
          homeowners, interior designers, and décor enthusiasts alike.
        </p>

        <br />

        <p>Here is some key Features of furnix app :</p>

        <br />

        <ul className="flex flex-col gap-10">
          <li className="relative">
            <h2 className="text-lg font-semibold">
              1. Grouped by Product Type
            </h2>
            <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
              <li>
                Furnix App product catalog is meticulously organized into
                distinct categories, allowing you to browse through our
                offerings with ease.
              </li>
              <li>
                Whether youre in the market for furniture, home decor, lighting,
                or accessories, our intuitive navigation system will guide you
                directly to the relevant section, saving you time and effort.
              </li>
              <li>
                Each product type is further divided into subcategories,
                ensuring you can quickly zero in on the specific items that
                align with your style and needs.
              </li>
            </ul>
            <div className="w-full mt-4 grid place-items-center">
              <Image
                src={shop}
                alt="maksa"
                className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                placeholder="blur"
              />
            </div>
          </li>
          <li className="relative">
            <h2 className="text-lg font-semibold">
              2. Advanced Filtering and Sorting
            </h2>
            <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
              <li>
                Furnix App robust filtering system allows you to narrow down
                your search by product type, such as furniture, decor, lighting,
                and more.
              </li>
              <li>
                You can also sort the products by price, from low to high or
                high to low, enabling you to easily identify the best deals and
                discounts.
              </li>
              <li>
                Additionally, you can filter by discount percentage, ensuring
                you can quickly find the items with the most attractive savings.
              </li>
              <li>
                You can search by keywords, product names, or even unique
                identifiers to locate the exact items youre looking for.
              </li>
              <li>
                Our pagination system ensures a seamless browsing experience,
                allowing you to navigate through the search results with ease
                and view additional products without feeling overwhelmed.
              </li>
            </ul>
            <div className="w-full mt-4 grid place-items-center">
              <Image
                src={filter}
                alt="maksa"
                className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                placeholder="blur"
              />
            </div>
          </li>
          <li className="relative">
            <h2 className="text-lg font-semibold">
              3. Comprehensive Product Details
            </h2>
            <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
              <li>
                When you click on a product on Furnix App, youll be presented
                with a dedicated page that showcases a wealth of information
                about the item.
              </li>
              <li>
                This includes high-quality images from multiple angles, allowing
                you to examine the productss design, materials, and
                craftsmanship in detail.
              </li>
              <li>
                The product description provides an in-depth overview of the
                item, including its dimensions, weight, and any special features
                or functionalities.
              </li>
              <li>
                We also include detailed specifications, such as the materials
                used, care instructions, and any relevant certifications or
                warranties.
              </li>
            </ul>
            <div className="w-full mt-4 grid place-items-center">
              <Image
                src={detail}
                alt="maksa"
                className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                placeholder="blur"
              />
            </div>
          </li>
          <li className="relative">
            <h2 className="text-lg font-semibold">
              4. Informative and Engaging Blog Posts
            </h2>
            <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
              <li>
                The Furnix App blog features a diverse range of articles
                covering a wide array of home design topics, from the latest
                trends and styling tips to practical DIY projects and
                space-saving solutions.
              </li>
              <li>
                Whether youre a seasoned interior design enthusiast or a
                first-time homeowner, our blog posts cater to a variety of skill
                levels and design preferences, ensuring that theres something
                for everyone.
              </li>
            </ul>
            <div className="w-full mt-4 grid place-items-center">
              <Image
                src={blog}
                alt="maksa"
                className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                placeholder="blur"
              />
            </div>
          </li>
          <li className="relative">
            <h2 className="text-lg font-semibold">5. Personalized Wishlist</h2>
            <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
              <li>
                Furnix App wishlist feature allows you to save your favorite
                home furnishings for future reference or easy access.
              </li>
              <li>
                As you browse our extensive product catalog, you can simply add
                items to your wishlist with a single click, creating a
                personalized collection of items that youre considering for your
                home. Your wishlist serves as a convenient hub, where you can
                revisit and review the products youre interested in, compare
                their features and prices, and make informed purchasing
                decisions.
              </li>
              <li>
                Your wishlist serves as a convenient hub, where you can revisit
                and review the products youre interested in, compare their
                features and prices, and make informed purchasing decisions.
              </li>
            </ul>
            <div className="w-full mt-4 grid place-items-center">
              <Image
                src={wishlist}
                alt="maksa"
                className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                placeholder="blur"
              />
            </div>
          </li>
          <li className="relative">
            <h2 className="text-lg font-semibold">
              6. Intuitive Shopping Cart
            </h2>
            <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
              <li>
                The Furnix App shopping cart is designed to be user-friendly and
                efficient, making it easy for you to manage your purchases.
              </li>
              <li>
                As you add items to your cart, you&apos;ll be able to view a
                summary of your selections, including the product details,
                quantities, and the total cost.
              </li>
              <li>
                Our cart page also provides you with the ability to adjust the
                quantities, remove items, and apply any available discounts or
                promotional codes, ensuring you have complete control over your
                shopping experience.
              </li>
            </ul>
            <div className="w-full mt-4 grid place-items-center">
              <Image
                src={cart}
                alt="maksa"
                className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                placeholder="blur"
              />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Furnix;
