import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {  Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InstructorCourses() {
  const navigate  = useNavigate()
  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
        <Button onClick={() => navigate("/instructor/create-new-course")} className="p-6">Create New Course</Button>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Courses</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">React js full course</TableCell>
              <TableCell>20</TableCell>
              <TableCell>$200</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  <Edit className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default InstructorCourses;
