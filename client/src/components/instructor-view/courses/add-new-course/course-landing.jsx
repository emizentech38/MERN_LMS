import React, { useContext } from "react";
import { Card, CardContent, CardHeader } from "../../../ui/card";
import {
  courseLandingPageFormControls,
} from "../../../../config";
import FormControls from "../../../common-form/form-controls";
import { InstructorContext } from "../../../../context/instructor-context";


function CourseLanding() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);


  return (
    <Card>
      <CardHeader>Course Landing Page</CardHeader>
      <CardContent>
          <FormControls
            formControls={courseLandingPageFormControls}
            formData={courseLandingFormData}
            setFormData={setCourseLandingFormData}
          />
      </CardContent>
    </Card>
  );
}

export default CourseLanding;
