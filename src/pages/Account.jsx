import PageTitle from "../components/dashboard/PageTitle";
import InputGroup from "../components/ui/inputs/InputGroup";
import PasswordInput from "../components/ui/inputs/PasswordInput";
import defaultAvatar from "../assets/images/dashboard/user.png";
import DashboardButton from "../components/ui/buttons/DashboardButton";

const data = {
  avatar: defaultAvatar,
  username: "johndoe",
  email: "testemail@gmail.com",
};

const AccountPage = () => {
  return (
    <div className="h-full w-full">
      <PageTitle title="Account" />

      <div className="grid grid-cols-1 gap-[1em] pb-[4em] xl:mt-[1.5em] xl:grid-cols-10 2xl:grid-cols-4">
        {/* Avatar, username and email */}
        <div className="mt-[1em] rounded-[0.3em] border border-white/30 bg-white/5 p-[1em] xl:col-span-3 xl:mt-0 xl:pt-[2em] 2xl:col-span-1">
          <div className="flex items-center gap-[1em] xl:flex-col xl:justify-center xl:gap-[0.5em] xl:border-b xl:border-b-white/30 xl:pb-[0.5em] xl:text-center">
            <img
              src={data.avatar}
              alt={data.username}
              className="size-[6em] rounded-full border-[0.3em] border-white/50 object-cover object-center backdrop-blur-sm"
            />
            <div>
              <h5 className="text-[1.2em] font-semibold">{data.username}</h5>
              <h6 className="overflow-hidden xl:w-[20ch]">{data.email}</h6>
            </div>
          </div>
        </div>

        <div className="xl:col-span-7 2xl:col-span-3">
          {/* Profile settings */}
          <h4 className="text-[1.6em] font-medium">Profile</h4>
          <div className="mt-[0.5em] space-y-[1em] rounded-[0.3em] border border-white/30 bg-white/5 px-[1em] py-[1.5em]">
            {/* Username */}
            <InputGroup id="username" type="text" label="Username" />

            {/* Email */}
            <InputGroup id="email" type="email" label="Email" />

            {/* Submit */}
            <div className="flex justify-end pt-[0.5em]">
              <DashboardButton>Submit</DashboardButton>
            </div>
          </div>

          {/* Password settings */}
          <h4 className="mt-[0.7em] text-[1.6em] font-medium xl:mt-[1em]">
            Change Password
          </h4>
          <div className="mt-[0.5em] space-y-[1em] rounded-[0.3em] border border-white/30 bg-white/5 px-[1em] py-[1.5em]">
            {/* Current password */}
            <PasswordInput
              id="password"
              type="password"
              label="Current Password"
              column
            />
            <div className="mt-[2em] mb-[1.4em] h-px w-full bg-white/30"></div>

            {/* New password */}
            <PasswordInput
              id="new-password"
              type="password"
              label="New Password"
              column
            />

            {/* Confirm password */}
            <PasswordInput
              id="confirm-password"
              type="password"
              label="Confirm Password"
              column
            />

            {/* Submit */}
            <div className="flex justify-end pt-[0.5em]">
              <DashboardButton>Submit</DashboardButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
