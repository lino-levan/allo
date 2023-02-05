export default function CreateChild() {
  return (
    <div class="border p-4 rounded max-w-lg flex flex-col gap-4">
      <div>
        <h1 class="text-xl">Create account for your child</h1>
        <p class="text-gray-500">
          This account will be used by your child to view their allowance and
          spending habits as well as to spend it.
        </p>
      </div>

      <input
        id="name"
        class="px-4 py-2 rounded border w-full"
        placeholder="Account Name"
      />
      <input
        id="email"
        class="px-4 py-2 rounded border w-full"
        placeholder="Account Email"
      />
      <button
        class="px-4 py-2 rounded border hover:bg-[#6c63ff] hover:text-white transition-all"
        onClick={() => {
          const name =
            (document.getElementById("name") as HTMLInputElement).value;
          const email =
            (document.getElementById("email") as HTMLInputElement).value;

          fetch("/app/api/create_child", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          }).then((res) => res.text()).then((res) => {
            console.log(res);
            location.href = "/app/child/" + res;
          });
        }}
      >
        Create Account
      </button>
    </div>
  );
}
