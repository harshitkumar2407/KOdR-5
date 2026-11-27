import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "./models/payment.model";




export const getRazorpayKey = (req,res) =>{
    res.status(200).json({
        success:true,
        key: process.env.RAZORPAY_KEY_ID,
    });
};


export const createOrder = async (req,res) =>{
    try {
        const {amount} = req.body;
        const courseAmout = amount || 50;


        const order = await rezorpayInstance.order.create(option);

        await Payment.create({
            orderId:order.id,
            amount:courseAmout,
            currency: order.currency,
            status: 'pending',
        });
        res.status(200).json(order);
    } catch (error) {
        console.error("Error in createOrder",error);
        res.status(500).json({
            success:false,
            message: "oder create karne me error aaya",
            error:error.message,            
        })
    }
}


export const verifyPayment = async (req,res) =>{
    try {
        const {razorpayOrderId, razorpayPaymetId,signatre} = req.body;
        const secret = process.env.RAZORPAY_KEY_SECRET;
        
        if (!razorpayOrderId || !razorpayPaymetId || !signatre) {
            return res.status(400).json({
                success:false,
                message:"Order Id, Payment ID ya Signature missing hai!"
            })
        }

        const isAuthentic = validatePaymentVerification(
            {order_id: razorpayPaymetId,payment_id: razorpayPaymetId},
            signatre,
            secret
        );

        if(isAuthentic){
            const payment = await Payment.findOne({orderId:razorpayOrderId});

            if(payment){
                payment.paymentId = razorpayPaymetId;
                payment.signature = signatre;
                payment.status = "completd";
                await payment.save();
            }
            return res.status(200).json({
                success:true,
                message: 'Paymet verified successfully',
            });
        } else{
            await Payment.findOneAndUpdate(
                {orderId: razorpayPaymetId},
                {status: "failed"}
            )
            
            return res.status(400).json({
                success:false,
                message:"Invalid signature! Payment fackeya tampered"
            })
        }
    } catch (error) {
        console.error('error in virifyPayment:',error),
        res.status(500).json({
            success: false,
            message:"Payment verification ke waqt error aaya",
        })

        
    }
}