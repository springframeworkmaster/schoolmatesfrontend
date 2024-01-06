import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  updateSchoolmate,
  createSchoolmate,
  getSchoolmateById,
} from "../services/SchoolmateService.js";

const useSchoolmateComponentHook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [profession, setProfession] = useState("");
  const [comments, setComments] = useState("");
  const [dob, setDob] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const saveOrUpdateSchoolmate = async (e) => {
    e.preventDefault();

    const schoolmate = { firstName, lastName, phone, currentCity, profession, comments, dob };

    if (firstName) {
      try {
        if (id) {
          await updateSchoolmate(id, schoolmate);
          toast.info("schoolmate updated successfully!");
          navigate("/");
        } else {
          await createSchoolmate(schoolmate);
          toast.success("schoolmate added successfully!");
          navigate("/");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error saving/updating schoolmate:", error);
      }
    } else {
      toast.error("Please Name in all the fields!");
    }
  };

  const getSchoolmateData = async (schoolmateId) => {
    const response = await getSchoolmateById(schoolmateId);
    const schoolmate = response.data;
    setFirstName(schoolmate.firstName);
    setLastName(schoolmate.lastName);
    setPhone(schoolmate.phone);
    setCurrentCity(schoolmate.currentCity);
    setProfession(schoolmate.profession);
    setComments(schoolmate.comments);
    setDob(schoolmate.dob);
  };

  useEffect(() => {
    if (id) {
      getSchoolmateData(id);
    } else {
    }
  }, [id]);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    currentCity,
    setCurrentCity,
    profession,
    setProfession,
    comments,
    setComments,
    dob,
    setDob,
    saveOrUpdateSchoolmate,
  };
};

export default useSchoolmateComponentHook;
