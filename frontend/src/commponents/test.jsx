import '../index.css';

function Test(){
    return(
        <div class="max-w-screen-xl h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth py-4 ml-7">
  <div class="flex flex-wrap -mx-4">
    <div class="w-72 md:w-1/2 lg:w-1/4 px-4 mb-8">
      <div class="max-w-xs w-72 h-full rounded overflow-hidden shadow-lg">
        <img class="w-72 h-80 object-cover" src="https://bacaterus.com/wp-content/uploads/2022/08/konosuba-season-1___.webp" alt="Product Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Product Name</div>
          <p class="text-gray-700 text-base">
            Description of the product goes here.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag2</span>
        </div>
      </div>
    </div>
    <div class="w-72 md:w-1/3 lg:w-1/4 px-7 mb-8">
      <div class="max-w-xs w-72 h-full rounded overflow-hidden shadow-lg">
        <img class="w-72 h-80 object-cover" src="https://via.placeholder.com/350x200" alt="Product Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Product Name</div>
          <p class="text-gray-700 text-base">
            Description of the product goes here.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag2</span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Test;