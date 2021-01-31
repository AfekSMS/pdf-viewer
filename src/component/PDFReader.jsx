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
  const [showFile, setshowFile] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    /*console.log(numPages); - to continue from here it prints 4 , meaning it knows it has 4 pages in this current
                                document and then see how to continue to show on scroll or to see if there is away to load mor then one file.*/
    setisLoading(false);
  }
  function onClickLoadPage() {
    setshowFile("/assets/docs/file-sample.pdf");
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
            <a
              className="file-button"
              onClick={onClickLoadPage}
              href="#section-1"
            >
              <i className="far fa-file-pdf"> file Name</i>
            </a>
          </li>
          <li>
            <a className="file-button" href="#section-1">
              <i className="far fa-file-pdf"> file Name</i>
            </a>
          </li>
          <li>
            <a className="file-button" href="#section-1">
              <i className="far fa-file-pdf"> file Name</i>
            </a>
          </li>
          <li>
            <a className="file-button" href="#section-1">
              <i className="far fa-file-pdf"> file Name</i>
            </a>
          </li>
          <li>
            <a className="file-button" href="#section-1">
              <i className="far fa-file-pdf"> file Name</i>
            </a>
          </li>
        </ul>
      </nav>
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center"
      >
        <Document
          onLoadSuccess={onDocumentLoadSuccess}
          file={showFile}
          className="document-layOut"
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
