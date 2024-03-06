import FeedbackComponent from "./FeedbackComponent";
import ProductComponent from "./ProductComponent";


const MainComponent = () => {
    return (
        <main>
            {/* Product Section */}
            <section id="product" className="grid grid-cols-4 grid-flow-row gap-8 p-8">
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
            </section>

            {/* Feedback Section */}
            <section className="grid grid-cols-2 grid-flow-row p-[100px]">
                <FeedbackComponent/>
                <FeedbackComponent/>
            </section>
        </main>   
    );
}
export default MainComponent