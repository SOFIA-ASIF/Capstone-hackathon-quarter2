"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BillingInfoInputValidation } from "@/lib/validations";
import { Button } from "./ui/button";
import { useAtom } from "jotai";
import { billingAtom } from "@/lib/jotai";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";

const FormSchema = BillingInfoInputValidation;

export function CheckoutBillingForm() {

	const [billingInfo, setBillingInfo] = useAtom(billingAtom);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			country: "",
			street: "",
			town: "",
			province: "",
			phone: "",
			email: "",
			bankaccountnumber: "",
		},
	});

	function handleSubmit(data: z.infer<typeof FormSchema>) {
		setBillingInfo(data);
		console.log("Billing Info Saved:", data);
		toast({
			title: "Details Saved!",
			description: "You can now place your order",
			action: <ToastAction altText="Goto schedule to undo">Close</ToastAction>,
		});
	};

	useEffect(() => {
		async function fetchBillingInfo() {
		  if (billingInfo) {
			form.setValue("firstName", billingInfo?.firstName);
			form.setValue("lastName", billingInfo?.lastName);
			form.setValue("country", billingInfo?.country);
			form.setValue("street", billingInfo?.street);
			form.setValue("town", billingInfo?.town);
			form.setValue("province", billingInfo?.province);
			form.setValue("phone", billingInfo?.phone);
			form.setValue("email", billingInfo?.email);
			form.setValue("bankaccountnumber", billingInfo?.bankaccountnumber)
		  }
		}
	
		fetchBillingInfo();
	}, [billingInfo]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit, (errors) => console.log("validation errors: ", errors))} className="w-full space-y-6 pb-32">
				<p className="font-bold text-[36px]">Billing details</p>
				<div className="flex gap-[31px] w-full">
					<div className="flex-grow">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="" type="firstName" {...field} className="h-[50px]" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex-grow">
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="" type="lastName" {...field} className="h-[50px]" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country / Region</FormLabel>
							<FormControl>
								<Input placeholder="" type="country" {...field} className="h-[50px]" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="street"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Street address</FormLabel>
							<FormControl>
								<Input placeholder="" type="street" {...field} className="h-[50px]" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="town"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Town / City</FormLabel>
							<FormControl>
								<Input placeholder="" type="town" {...field} className="h-[50px]" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="province"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Province</FormLabel>
							<FormControl>
								<Input placeholder="" type="province" {...field} className="h-[50px]" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder="" type="phone" {...field} className="h-[50px]" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email address</FormLabel>
							<FormControl>
								<Input placeholder="" type="email" {...field} className="h-[50px]" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="bankaccountnumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bank Account Number</FormLabel>
							<FormControl>
								<Input placeholder="" type="bankaccountnumber" {...field} className="h-[50px]" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="mt-6">
					<Button type="submit">Save Billing Info</Button>
				</div>
			</form>
		</Form>
	);
}
