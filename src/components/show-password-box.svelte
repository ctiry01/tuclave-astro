<script>
    import {password} from "../../store/generated-password.ts";
    import {calculatePasswordSecureLevel} from "../helpers/password.ts";

    let passwordGenerated = '';
    let isPasswordOnClipboard = false;
    let passwordSecurityLevel = 0;

    password.subscribe(value => {
        passwordGenerated = value;
        passwordSecurityLevel = calculatePasswordSecureLevel(value);
    });
</script>


<div>
    {#if $password}
        <span class="block text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded p-6">{passwordGenerated}</span>
    {/if}
    <div class="p-0.5 rounded-3xl bg-gray-100 my-4">
        <div class="rounded-3xl p-1 overflow-hidden bg-red-950 w-full h-3 relative flex justify-center items-center shadow-2xl shadow-black">
            <span class="text-center text-xs z-10">{passwordSecurityLevel}%</span>
            <div class="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-green-500 to-green-700 shadow-md shadow-green-950"
                 style="width: {passwordSecurityLevel}%"/>
        </div>
    </div>
    <button class={`w-full rounded ${isPasswordOnClipboard ? 'bg-green-500' : 'bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600'}`}
            on:click={() => navigator.clipboard.writeText(passwordGenerated).then(() => {
                setTimeout(() => {
                    isPasswordOnClipboard = false;
                }, 2000);
                    isPasswordOnClipboard = true;
                })}>{!isPasswordOnClipboard ? 'Copiar contraseña' : 'Contraseña copiada!'}</button>
</div>

