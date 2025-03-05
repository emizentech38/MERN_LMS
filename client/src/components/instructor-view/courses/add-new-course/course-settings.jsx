import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { InstructorContext } from "../../../../context/instructor-context";
import { mediaUploadService } from "../../../../services";
import MediaProgressbar from "../../../media-progress-bar";

function CourseSettings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  const handleImageUploadChange = async (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediaUploadProgressPercentage
        );
        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response?.data?.url,
          });
          setMediaUploadProgress(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(courseLandingFormData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <div className="p-4">
        {mediaUploadProgress ? (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        ) : null}
      </div>
      <CardContent>
        {courseLandingFormData?.image ? (
          <img src={courseLandingFormData?.image} />
        ) : null}
        <div className="flex flex-col gap-3">
          <Label>Upload Course Image</Label>
          <Input
            type="file"
            accept="image/*"
            className="mb-4"
            onChange={handleImageUploadChange}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseSettings;
