import Link from 'next/link'
import { Button } from '~/../../packages/ui'
import { primaryLinks, secondaryLinks } from '~/data/footer'
import { LayoutMainContent } from '../../layouts/DefaultLayout'

const Footer = () => (
  <LayoutMainContent className="pt-0">
    <div className="mt-8">
      <ul className="flex flex-col gap-2">
        {primaryLinks.map(({ url, featherIcon: Icon, icon, text, ctaLabel }) => (
          <li key={url} className="flex items-center gap-1 text-xs text-scale-900">
            {icon && (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={icon}
                  stroke="var(--colors-scale9)"
                  strokeWidth={0.7}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            {Icon && <Icon width={16} height={16} />}
            <p>{text}</p>
            <Link href={url} passHref>
              <a
                className="text-brand-900 hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                {ctaLabel}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <hr className="border-scale-400 my-6"></hr>
    <div className="flex gap-4 items-center justify-between">
      <div className="flex flex-col lg:flex-row gap-3 ">
        <Link href="https://supabase.com/">
          <a className="text-xs text-scale-900">&copy; Supabase Inc</a>
        </Link>
        <span className="text-xs text-scale-900">—</span>
        {secondaryLinks.map((item) => (
          <Link href={item.url} key={item.url}>
            <a className="text-xs text-scale-800 hover:underline">{item.title}</a>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://github.com/supabase/supabase"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.66832 1.55469C4.98649 1.55469 2.00195 4.54402 2.00195 8.23269C2.00195 11.1827 3.91187 13.686 6.56108 14.5687C6.8944 14.63 7.01573 14.424 7.01573 14.2467C7.01573 14.0887 7.0104 13.668 7.00706 13.1114C5.15248 13.5147 4.76116 12.216 4.76116 12.216C4.45851 11.444 4.0212 11.2387 4.0212 11.2387C3.41589 10.8254 4.06719 10.8334 4.06719 10.8334C4.73583 10.88 5.08782 11.5214 5.08782 11.5214C5.68246 12.5414 6.64841 12.2467 7.02773 12.076C7.08906 11.6447 7.26105 11.3507 7.45171 11.184C5.97178 11.0154 4.41518 10.442 4.41518 7.88335C4.41518 7.15469 4.67517 6.55802 5.10115 6.09135C5.03248 5.92269 4.80383 5.24335 5.16648 4.32469C5.16648 4.32469 5.72645 4.14469 6.99973 5.00869C7.54355 4.86036 8.10464 4.78482 8.66832 4.78402C9.23496 4.78669 9.80494 4.86069 10.3376 5.00869C11.6102 4.14469 12.1688 4.32402 12.1688 4.32402C12.5328 5.24335 12.3035 5.92269 12.2355 6.09135C12.6621 6.55802 12.9208 7.15469 12.9208 7.88335C12.9208 10.4487 11.3615 11.0134 9.87694 11.1787C10.1163 11.3847 10.3289 11.792 10.3289 12.4154C10.3289 13.3074 10.3209 14.028 10.3209 14.2467C10.3209 14.4254 10.4409 14.6334 10.7796 14.568C12.107 14.1228 13.261 13.2716 14.0784 12.1347C14.8958 10.9979 15.3353 9.6329 15.3347 8.23269C15.3347 4.54402 12.3495 1.55469 8.66832 1.55469Z"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://youtube.com/c/supabase"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.665 4.35595C15.481 3.66308 14.9388 3.11739 14.2505 2.93221C13.0028 2.5957 7.99964 2.5957 7.99964 2.5957C7.99964 2.5957 2.99655 2.5957 1.74883 2.93221C1.06047 3.11742 0.518326 3.66308 0.334321 4.35595C0 5.61181 0 8.23207 0 8.23207C0 8.23207 0 10.8523 0.334321 12.1082C0.518326 12.8011 1.06047 13.324 1.74883 13.5092C2.99655 13.8457 7.99964 13.8457 7.99964 13.8457C7.99964 13.8457 13.0027 13.8457 14.2505 13.5092C14.9388 13.324 15.481 12.8011 15.665 12.1082C15.9993 10.8523 15.9993 8.23207 15.9993 8.23207C15.9993 8.23207 15.9993 5.61181 15.665 4.35595ZM6.36334 10.6111V5.85307L10.545 8.23212L6.36334 10.6111Z"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://twitter.com/supabase"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.52713 13.7223C10.5582 13.7223 13.3101 9.55365 13.3101 5.93898C13.3101 5.82032 13.3101 5.70232 13.3021 5.58565C13.8375 5.198 14.2996 4.71806 14.6667 4.16832C14.1675 4.38965 13.6378 4.53483 13.0955 4.59898C13.6665 4.25702 14.0939 3.71922 14.2981 3.08565C13.7612 3.40424 13.1739 3.6288 12.5615 3.74965C12.1491 3.31083 11.6035 3.02021 11.0093 2.92279C10.4151 2.82537 9.80528 2.92658 9.27438 3.21076C8.74347 3.49494 8.32106 3.94623 8.07255 4.49476C7.82403 5.04328 7.76328 5.65844 7.89969 6.24498C6.81213 6.19048 5.74819 5.90787 4.77693 5.4155C3.80567 4.92313 2.9488 4.232 2.26194 3.38698C1.91217 3.98912 1.80502 4.70193 1.96231 5.38029C2.1196 6.05866 2.52951 6.65157 3.10857 7.03832C2.67343 7.02572 2.2477 6.90865 1.86729 6.69698V6.73165C1.86755 7.36318 2.08621 7.97519 2.4862 8.46389C2.88618 8.95259 3.44287 9.28791 4.06186 9.41298C3.65909 9.52279 3.2365 9.53876 2.82658 9.45965C3.00135 10.0033 3.34168 10.4787 3.79996 10.8194C4.25824 11.1601 4.81154 11.349 5.38247 11.3597C4.81524 11.8054 4.16572 12.1349 3.47104 12.3293C2.77636 12.5238 2.05017 12.5794 1.33398 12.493C2.585 13.2959 4.04066 13.7217 5.52713 13.7197"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://discord.supabase.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1182_99731)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8781 3.13594C12.8583 2.66802 11.7648 2.32328 10.6215 2.12583C10.6006 2.12202 10.5798 2.13154 10.5691 2.15059C10.4285 2.40073 10.2727 2.72706 10.1636 2.98356C8.93387 2.79945 7.71044 2.79945 6.50592 2.98356C6.39681 2.72136 6.23538 2.40073 6.09411 2.15059C6.08339 2.13218 6.06259 2.12265 6.04176 2.12583C4.89905 2.32265 3.80554 2.66739 2.78517 3.13594C2.77633 3.13975 2.76876 3.14611 2.76374 3.15435C0.689563 6.25326 0.12136 9.276 0.400102 12.2613C0.401363 12.2759 0.409561 12.2898 0.420913 12.2987C1.78939 13.3037 3.115 13.9139 4.41599 14.3183C4.43681 14.3247 4.45887 14.317 4.47212 14.2999C4.77987 13.8796 5.0542 13.4364 5.28941 12.9704C5.3033 12.9431 5.29005 12.9107 5.26167 12.9C4.82654 12.7349 4.4122 12.5336 4.01364 12.3051C3.98212 12.2867 3.97959 12.2416 4.00859 12.22C4.09247 12.1571 4.17636 12.0917 4.25645 12.0257C4.27094 12.0136 4.29113 12.0111 4.30816 12.0187C6.92655 13.2142 9.76126 13.2142 12.3488 12.0187C12.3658 12.0105 12.386 12.013 12.4011 12.0251C12.4812 12.0911 12.5651 12.1571 12.6496 12.22C12.6786 12.2416 12.6767 12.2867 12.6452 12.3051C12.2466 12.5381 11.8323 12.7349 11.3965 12.8993C11.3681 12.9101 11.3555 12.9431 11.3694 12.9704C11.6097 13.4358 11.884 13.879 12.1861 14.2993C12.1987 14.317 12.2214 14.3247 12.2422 14.3183C13.5495 13.9139 14.8751 13.3037 16.2436 12.2987C16.2556 12.2898 16.2631 12.2765 16.2644 12.2619C16.598 8.8106 15.7056 5.81265 13.8989 3.15498C13.8944 3.14611 13.8869 3.13975 13.8781 3.13594ZM5.68043 10.4435C4.89211 10.4435 4.24257 9.71978 4.24257 8.83093C4.24257 7.94207 4.87952 7.21831 5.68043 7.21831C6.48763 7.21831 7.13089 7.94843 7.11827 8.83093C7.11827 9.71978 6.48132 10.4435 5.68043 10.4435ZM10.9967 10.4435C10.2084 10.4435 9.55884 9.71978 9.55884 8.83093C9.55884 7.94207 10.1958 7.21831 10.9967 7.21831C11.8039 7.21831 12.4471 7.94843 12.4345 8.83093C12.4345 9.71978 11.8039 10.4435 10.9967 10.4435Z"
                fill="var(--colors-scale9)"
              />
            </g>
            <defs>
              <clipPath id="clip0_1182_99731">
                <rect
                  width="15.9993"
                  height="16"
                  fill="white"
                  transform="translate(0.333984 0.222656)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
    </div>
  </LayoutMainContent>
)

export default Footer
