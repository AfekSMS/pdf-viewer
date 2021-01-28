import React, { useState } from "react";
import Loader from "./Loader";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setisLoading] = useState(true);
  //const [showFile, setshowFile] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setisLoading(false);
  }

  //const showFile = () => {};

  return (
    <div style={{ width: "100%" }}>
      <Loader isLoading={isLoading} />
      <ControlPanel
        scale={scale}
        setScale={setScale}
        numPages={numPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        file="/assets/docs/file-sample.pdf"
      />

      <nav>
        <ul>
          <li>
            <a onClick={onDocumentLoadSuccess} href="#section-1">
              file Name
            </a>
          </li>
          <li>
            <a href="#section-2">Section 2</a>
          </li>
          <li>
            <a href="#section-3">Section 3</a>
          </li>
          <li>
            <a href="#section-4">Section 4</a>
          </li>
          <li>
            <a href="#section-5">Section 5</a>
          </li>
          <li>
            <a href="#section-6">Section 6</a>
          </li>
          <li>
            <a href="#section-7">Section 7</a>
          </li>
          <li>
            <a href="#section-8">Section 8</a>
          </li>
          <li>
            <a href="#section-9">Section 9</a>
          </li>
        </ul>
      </nav>
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center"
      >
        <Document
          file="/assets/docs/file-sample.pdf"
          //onLoadSuccess={onDocumentLoadSuccess}
          className="document-layOut"
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
