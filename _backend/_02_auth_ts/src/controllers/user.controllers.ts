import UserModel from "../model/userModel";
import express, { Request, Response } from "express";




async function getMyProfile(req: Request, res: Response): Promise<void> {
    try{
        const user = await UserModel.findById(req.user?.id);

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
            },
        });
    }
    catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }     

async function updateMyProfile(req:Request,res:Response):Promise<void> {
    try {
        const user = await UserModel.findByIdAndUpdate(req.user?.id, req.body, { new: true });

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
            },
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}


async function deleteMyProfile(req:Request,res:Response):Promise<void> {
    try {
        const user = await UserModel.findByIdAndDelete(req.user?.id);
        console.log("Deleted user:", user);
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success:false,
            message:"Internal server error",
        });
    }
    
}
export { getMyProfile, updateMyProfile, deleteMyProfile };
