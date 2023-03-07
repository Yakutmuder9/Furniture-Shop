"use strict";
import { Router } from "express";
import { upload } from "../contollers/filehelper.js";
import {
  singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles}
from "../contollers/fileuploaderController.js";
const fileRouter = Router();

fileRouter.post("/singleFile", upload.single("file"), singleFileUpload);
fileRouter.post("/multipleFiles", upload.array("files"), multipleFileUpload);
fileRouter.get("/getSingleFiles", getallSingleFiles);
fileRouter.get("/getMultipleFiles", getallMultipleFiles);

export default  fileRouter;
  