<template>
  <div class="bg-secondary-700">
    <BaseHeader />
    <div class="container mx-auto mt-12 px-7">
      <div class="w-full space-y-3 mb-8">
        <h1
          class="max-w-4xl text-white text-4xl font-bold leading-[150%] md:mx-auto md:text-7xl md:leading-[150%] md:text-center"
        >
          All your business expenses in one place.
        </h1>
        <p
          class="text-sm text-secondary-300 font-normal leading-[150%] md:mx-auto md:text-2xl md:leading-[150%] md:text-center"
        >
          Your one-stop finance empower platform. <br />
          Manage all your business expenses with our supafast app.
        </p>
      </div>
      <div
        class="flex flex-col space-y-6 mb-14 md:mb-20 md:items-center md:space-x-6 md:space-y-0 md:flex-row md:justify-center"
      >
        <button
          class="bg-primary-500 inline-block font-semibold text-white px-6 py-[13px] rounded-[30px]"
        >
          Get a Free Demo
        </button>
        <button
          class="text-secondary-400 inline-block font-semibold px-6 py-[13px] rounded-[30px] md:text-white md:bg-secondary-500"
        >
          See Pricing
        </button>
      </div>
      <div>
        <img
          src="~/assets/images/dashboard-desktop.png"
          class="hidden sm:block"
          alt="dashboard"
        />
        <img
          src="~/assets/images/dashboard-mobile.png"
          class="w-full block sm:hidden"
          alt="dashboard"
        />
      </div>
    </div>
  </div>
</template>
