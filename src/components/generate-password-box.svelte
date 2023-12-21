<script>
    import {password} from "../../store/generated-password.ts";
    import {generatePassword} from "../helpers/password.ts";
    import {LenghtSelectPassword, TypeSelectPassword} from "../constants/password-options.ts";

    let largePassword = LenghtSelectPassword[4].value
    let typePassword = TypeSelectPassword[3].value

    function handleLargePassword(e) {
        largePassword = e.target.value
    }

    function handleTypePassword(e) {
        typePassword = e.target.value
    }

    function handleGeneratePassword() {
        password.set(generatePassword(largePassword, typePassword));
    }

    password.set(generatePassword(largePassword, typePassword));
</script>

<div class="grid grid-rows-1 gap-5">
    <div class="flex flex-col">
        <label for="large">Longitud de la contraseña</label>
        <select class="bg-gray-100 text-gray-900" id="large"
                on:change={handleLargePassword}>
            {#each LenghtSelectPassword as item}
                <option selected={largePassword === item.value} value={item.value}>{item.label}</option>
            {/each}
        </select>
    </div>
    <div class="flex flex-col">
        <label for="type-password">Tipo de contraseña</label>
        <select class="bg-gray-100 text-gray-900" id="type-password"
                on:change={handleTypePassword}>
            {#each TypeSelectPassword as item}
                <option selected={typePassword === item.value} value={item.value}>{item.label}</option>
            {/each}
        </select>
    </div>
    <button on:click={handleGeneratePassword} type="button"
            class="rounded px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600">
        Generar
    </button>
</div>
