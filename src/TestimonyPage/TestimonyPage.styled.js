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

const TestiModal = styled.div`
    width: 90%;
    padding: 20px;
`

//Submissions Page stylings

const TestiSubmission = styled.div`
    width: 90%;
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

`

const TestiSubmissionColumn = styled.div`
    background: black;
    height: 20em;
    width: 50%;
`
const TestiSubmit = styled.div`
    padding-top: 1em;
    display: flex;
    justify-content: center;
`

export {
    TestiPage, TestimonyHeader, TestimonyContent, TestiSubmission, TestiModal, TestiSubmissionHeader, TestiSubmissionContent,
    TestiSubmissionColumn, TestiSubmit
       }