import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import argon2 from "argon2";
import User from "../models/userModel";
import Order from "../models/orderModel";
import { generateToken } from "../utils";

export const signin = expressAsyncHandler(async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  const x = await argon2.hash(req.body.password);
  console.log(x);
  if (user) {
    const valid = await argon2.verify(user.password, req.body.password);
    if (valid) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
});

export const register = expressAsyncHandler(async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: await argon2.hash(req.body.password),
  });
  const createdUser = await user.save();
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isAdmin: createdUser.isAdmin,
    token: generateToken(createdUser),
  });
});

export const getUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      createrdAt: user.createdAt,
    });
  } else {
    res.status(404).send({ message: "User not Found" });
  }
});

export const getProfileInfo = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  const orders = await Order.find({ user: req.params.id });

  if (!user) {
    res.status(404).send({ message: "User not Found" });
    return;
  }

  if (!orders) {
    res.status(404).send({ message: "Orders not Found" });
    return;
  }

  res.send({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      createrdAt: user.createdAt,
    },
    orders,
  });
});

export const patchProfileInfo = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = await argon2.hash(req.body.password);
    }
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    });
  }
});
