const ProductFeaturePart = () => {
  return (
    <>
      <div className="w-2/4 flex flex-col mx-auto my-px">
        <ul className='clothBrandParent mt-[100px]'>
          <li>Jonathan Simkhai</li>
          <li>Blazers</li>
          <li>Viscose</li>

        </ul>
        <div className='noteFromEditor'>
          a note from the editor
        </div>
        <p className='editorPara'>
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
        </p>
        <div className='editorBy flex justify-center items-center'> <div className="h-[1px] w-[28px] mr-[8px] bg-gray-500"></div>
          By MINNA SHIM, Fashion Editor</div>
      </div>
    </>
  )
}

export default ProductFeaturePart