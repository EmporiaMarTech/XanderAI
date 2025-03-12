"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import Papa from "papaparse"
import { cn } from "@/lib/utils"

interface CSVUploaderProps {
  onUpload: (data: any[]) => void
}

export function CSVUploader({ onUpload }: CSVUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      Papa.parse(file, {
        complete: (results) => {
          const headers = results.data[0] as string[]
          const rows = results.data.slice(1) as string[][]
          
          const formattedData = rows.map((row) => {
            const obj: any = {}
            headers.forEach((header, index) => {
              obj[header.toLowerCase().replace(/\s+/g, '_')] = row[index]
            })
            return obj
          })
          
          onUpload(formattedData)
        },
        header: false,
        skipEmptyLines: true,
      })
    })
  }, [onUpload])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv', '.xls', '.xlsx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    },
    multiple: false
  })

  return (
    <div className="flex flex-col bg-gradient-to-b from-neutral-900 to-neutral-900/50 backdrop-blur-xl border border-neutral-800/50 overflow-hidden rounded-xl shadow-lg">
      {/* Header */}
      <div className="py-3 px-5 flex justify-between items-center gap-x-5 border-b border-neutral-800/50">
        <h2 className="inline-block font-semibold text-neutral-200">
          Import Orders
        </h2>

        <div className="flex justify-end items-center gap-x-2">
          <button 
            type="button" 
            className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-neutral-800/50 bg-neutral-900/50 text-neutral-300 shadow-sm hover:bg-neutral-800/50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
              <path d="M12 12v9"/>
              <path d="m16 16-4-4-4 4"/>
            </svg>
            Import from URL
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <div 
            {...getRootProps()} 
            className={cn(
              "p-12 h-56 flex justify-center bg-neutral-900/30 border border-dashed border-neutral-800/50 rounded-xl cursor-pointer transition-all hover:border-blue-500/50 hover:bg-blue-500/5",
              isDragActive && "border-blue-500 bg-blue-500/10",
              isDragReject && "border-red-500 bg-red-500/10"
            )}
          >
            <div className="text-center">
              <svg className="w-16 text-neutral-600 mx-auto" width="70" height="46" viewBox="0 0 70 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z" fill="currentColor" stroke="currentColor" strokeWidth="2" className="fill-neutral-800 stroke-neutral-700"/>
                <path d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z" fill="currentColor" stroke="currentColor" strokeWidth="2" className="fill-neutral-800 stroke-neutral-700"/>
                <rect x="17.0656" y="1.62305" width="35.8689" height="42.7541" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" className="fill-neutral-800 stroke-neutral-700"/>
                <path d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z" stroke="currentColor" strokeWidth="2" className="stroke-neutral-700"/>
                <circle cx="39.5902" cy="14.9672" r="4.16393" stroke="currentColor" strokeWidth="2" className="stroke-neutral-700"/>
              </svg>

              <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-neutral-400">
                <span className="pe-1 font-medium text-neutral-300">
                  {isDragActive 
                    ? "Drop your file here" 
                    : "Drop your file here or"}
                </span>
                {!isDragActive && (
                  <label className="relative cursor-pointer font-semibold text-blue-400 hover:text-blue-300 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-900">
                    <span>browse</span>
                    <input {...getInputProps()} className="sr-only" />
                  </label>
                )}
              </div>

              <p className="mt-1 text-xs text-neutral-500">
                CSV, XLS, XLSX files only
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-neutral-500">
          Upload your order data in CSV or Excel format. Make sure your file includes the required columns: tracking number, status, origin, destination, and customer details.
        </p>
      </div>
    </div>
  )
}