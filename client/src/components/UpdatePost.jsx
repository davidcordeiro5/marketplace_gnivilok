import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@bootstrap-styled/v4';

import { Icon, IconButton } from '../reusable/resable'
import { UPDATE_POST, GET_POSTS } from '../utils/gqlQueries';
import EditIcon from '../assets/icons/edit.png'

//TODO create reusable styled
const ModalFromGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
  margin: 5px 0;
`;


const ModalFrom = styled.form`
  width: 100%;
  padding: 0 50px;
`;


const ModalLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #313131;
`;

const ModalInputText = styled.input`
  height: 30px;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  margin: 10px 0;
  color: '#313131';
`;

const ModalInputRadio = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 15px;
`;

const ModalInputSubmit = styled.input`
      cursor: pointer;
    padding: 0.6rem;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
    background-color: #313131;
    margin: 15px 0;
    color: #ffffff;
  :hover {
    background-color: #444444;
  }
`;

const UpdatePost = ({ post }) => {
  const { handleSubmit, register, errors } = useForm();
  const [updateModal, setUpdateModal] = useState(false)
  const handleClose = () => setUpdateModal(!updateModal);

  const [editedValues, setEditedValues] = useState({
    postId: post.id,
    title: "",
    imageUrl: "",
    description: "",
    price: "",
    size: "",
    disponibility: true,
  })

  const [updatePost] = useMutation(UPDATE_POST, {
    update(proxy, result) {
      console.log('result', result)
    },
    variables: editedValues
  })

  const onChange = (event) => {
    setEditedValues({ ...editedValues, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    updatePost()
    handleClose();
  };


  return (
    <>
      <IconButton bgc={"#ffdb43"} onClick={() => handleClose()}>
        <Icon src={EditIcon} alt="edit" />
      </IconButton>
      <Modal isOpen={updateModal} toggle={() => handleClose()}>
        <ModalHeader toggle={() => handleClose()}>Updating post</ModalHeader>
        <ModalBody>
          <ModalFrom onSubmit={handleSubmit(onSubmit)}>
            <ModalFromGroup>
              <ModalLabel forHtml="title">Title :</ModalLabel>
              <ModalInputText placeholder={post.title} id="title" name="title" onChange={onChange}/>
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="imageUrl">Image :</ModalLabel>
              <ModalInputText placeholder={post.imageUrl} id="imageUrl" name="imageUrl" onChange={onChange}/>
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="description">Description :</ModalLabel>
              <ModalInputText placeholder={post.description} id="description" name="description" onChange={onChange}/>
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="price">price :</ModalLabel>
              <ModalInputText placeholder={post.price} id="price" name="price" onChange={onChange}/>
            </ModalFromGroup>
            <ModalFromGroup>
              <ModalLabel forHtml="size">Size m2 :</ModalLabel>
              <ModalInputText placeholder={post.size} id="size" name="size" onChange={onChange}/>
            </ModalFromGroup>
            <ModalInputSubmit type="submit" value="Validate" />
          </ModalFrom>
        </ModalBody>
      </Modal>
    </>
  )
}

export default UpdatePost
