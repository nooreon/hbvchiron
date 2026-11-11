<script>
    import logo from '$lib/assets/Chiron.png'
    import {MapPin, Phone, Mail} from "@lucide/svelte";
    import Facebook from '$lib/assets/socials/Facebook.svg'
    import Instagram from '$lib/assets/socials/Instagram.svg'
</script>

<footer class="border-t bg-secondary">
    <div class="container mx-auto flex flex-wrap items-start justify-between gap-8 px-6 py-8">

        <!-- Logo + Socials -->
        <div class="flex min-w-45 flex-col gap-3">
            <div class="flex items-center gap-2.5">
                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 pb-1 shadow-md ring-2 ring-border">
                    <img src={logo} alt="" />
                </div>
                <span class="text-base font-medium">HBV Chiron</span>
            </div>

            <p class="max-w-50 text-sm leading-relaxed text-muted-foreground">
                Boogschieten voor iedereen
            </p>

            <div class="flex items-center gap-3">
                <a href="https://www.facebook.com/p/HBVChiron-61552956662317/"
                   target="_blank" rel="noopener noreferrer"
                   aria-label="Facebook"
                   class="opacity-60 transition-opacity hover:opacity-100">
                    <img src={Facebook} alt="" class="h-4 w-4 dark:invert" />
                </a>
                <a href="https://www.instagram.com/"
                   target="_blank" rel="noopener noreferrer"
                   aria-label="Instagram"
                   class="opacity-60 transition-opacity hover:opacity-100">
                    <img src={Instagram} alt="" class="h-4 w-4 dark:invert" />
                </a>
            </div>
        </div>

        <!-- Adres -->
        <div class="flex min-w-50 flex-col gap-2.5">
            <h2 class="text-xs font-medium uppercase tracking-widest text-muted-foreground">Adres</h2>

            <address class="flex items-start gap-2.5 not-italic">
                <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div class="text-sm leading-relaxed">
                    <p>de Spreng</p>
                    <p class="text-muted-foreground">Vredeveldseweg 57</p>
                    <p class="text-muted-foreground">9404 CC Assen</p>
                </div>
            </address>
        </div>

        <!-- Contact -->
        <div class="flex min-w-50 flex-col gap-2.5">
            <h2 class="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</h2>

            <div class="flex items-center gap-2.5">
                <Phone class="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="tel:+31641807238" class="text-sm hover:underline">06-41807238</a>
            </div>

            <div class="flex items-center gap-2.5">
                <Mail class="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="mailto:hbvchiron@gmail.com" class="text-sm text-primary hover:underline">hbvchiron@gmail.com</a>
            </div>
        </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t">
        <div class="container mx-auto flex flex-wrap items-center justify-between gap-2 px-6 py-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} HBV Chiron</p>
            <p>
                Website door
                <a href="https://github.com/nooreon/hbvchiron" target="_blank" rel="noopener noreferrer"
                   class="underline hover:text-foreground">Noor de Vries</a>
            </p>
        </div>
    </div>
</footer>