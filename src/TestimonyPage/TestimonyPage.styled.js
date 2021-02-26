import styled from 'styled-components'

const TestiPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:47em;
    background: #white;
`
// Header
const TestimonyHeader = styled.div`
    height:7em;
    text-decoration: underline;
    color:black;
    font-size:50px;
    font-weight: 700;
    font-style: italic;
    display:flex;
    justify-content: center;
    align-items: center;
`
//Content

const TestimonyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height:100%;
`
//Modal page stylings

const TestiGallery = styled.div`
    width: 90%;
    padding: 20px;
`

//Submissions Page stylings

const TestiSubmission = styled.div`
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #E8E8E8;
`
const TestiSubmissionHeader = styled.div`
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
`
const TestiSubmissionContent = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;

`

const TestiSubmissionColumn = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    height: 20em;
    width: 100%;
    border: 1px solid black;
    margin: 0 2px; 
`
const TestiSubmissionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const TestiInput = styled.textarea`
    width: 50%;
    height: 1em;
    padding: 10px;
    margin: 10px;
    overflow: hidden;
`

const TestiSubmit = styled.div`
    display: flex;
    justify-content: center;
`

export {
    TestiPage, TestimonyHeader, TestimonyContent, TestiSubmission, TestiGallery, TestiSubmissionHeader, TestiSubmissionContent,
    TestiSubmissionColumn, TestiSubmissionRow, TestiInput, TestiSubmit
       }